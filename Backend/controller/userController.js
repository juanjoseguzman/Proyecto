import { SignJWT } from "jose";
import dao from "../services/dao.js";
import md5 from "md5";
import utils from "../utils/utils.js";

const controller = {};

controller.addUser = async (req, res) => {
  const { nombre, email, password } = req.body;
  if (!nombre || !email || !password)
    return res.status(400).send("Error al recibir el body");
  try {
    const user = await dao.getUserbyEmail(email);
    if (user.length > 0) return res.status(409).send("usuario ya registrado");
    const addUser = await dao.addUser(req.body);
    if (addUser)
      return res.send(`Usuario ${nombre} con id: ${addUser} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send("Error al recibir el body");
  try {
    let user = await dao.getUserbyEmail(email);
    if (user.length <= 0) return res.status(404).send("usuario no registrado");
    const clienPassword = md5(password);
    [user] = user;
    if (user.password != clienPassword)
      return res.status(401).send("password incorrecta");
    const jwtConstructor = new SignJWT({
      id: user.idusuarios,
      email: email,
    });
    console.log(user);
    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.JWT_SECRET));
    return res.send({ jwt });
  } catch (e) {
    console.log(e.message);
  }
};

controller.deleteUser = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) return res.sendStatus(401);
  const token = authorization.split(" ")[1];

  try {
    const encoder = new TextEncoder();

    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    );

    if (!payload.role)
      return res.status(409).send("no tiene permiso de administrador");

    const user = await dao.getUserById(req.params.id);

    if (user.length <= 0) return res.status(404).send("el usuario no existe");

    await dao.deleteUser(req.params.id);

    return res.send(`El usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getUserById = async (req, res) => {
  try {
    let user = await dao.getUserById(req.params.id);
    if (user.length <= 0) return res.status(404).send("El usuario no existe");
    [user] = user;
    return res.send(user);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.updateUser = async (req, res) => {
  try {
    let user = await dao.getUserById(req.params.id);
    console.log(user);
    if (user.length <= 0) return res.status(404).send("El usuario no existe");

    let userObj = {
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      email: req.body.email,
      password: req.body.password ? md5(req.body.password) : undefined,
      activo: req.body.activo,
    };

    userObj = await utils.removeUndefinedKeys(userObj);
    const userUp = await dao.updateUser(req.params.id, userObj);

    return res.send(`Usuario con id ${req.params.id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
