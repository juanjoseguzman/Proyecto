import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";

export default function SimpleAccordion() {
  return (
    <Grid container md={12} justifyContent="center" marginTop="50px">
      <Grid container flexDirection="column" maxWidth={{ md: "md" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Qué requerimientos técnicos se necesitan?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Únicamente necesitas un móvil o tablet con conexión a internet y
              con el GPS activado.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Cómo empiezo a jugar?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Simplemente selecciona la ruta que quieres hacer. Recuerda tener
              el GPS activado. Hasta que no te situés en el punto inicial de la
              ruta y le des a Iniciar Ruta, no comenzará el juego.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Qué tipos de rutas te vas a encontrar?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hay dos tipos de ruta: Descubre a tu ritmo y A contrarreloj. La
              opción “Descubre a tu ritmo” te permite realizar la aventura sin
              prisas. No hay preocupación por el tiempo, simplemente disfruta
              del paseo resolviendo acertijos entretenidos. Siempre podrás
              retomarla donde la hayas dejado. La opción “A contrarreloj” está
              más enfocada la competición, existe un ranking y el objetivo es
              liderarlo. Los acertijos son relativos a lugares que vas
              visitando. Si tienes problemas, siempre puede utilizar nuestras
              pistas, pero recuerda, tienen penalización de tiempo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Qué tipos de acertijos pueden aparecer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              En cada punto de la ruta puede haber uno o más acertijos. Habrá
              acertijos cuya respuesta sea una frase o palabra, números o elegir
              entre las opciones que te planteamos. Cuidado que algunos son
              respuesta única y otro varias las opciones correctas. Los
              acertijos siempre estará relacionados con lo que rodea a ese punto
              de la aventura.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Cómo son las pistas?¿me penalizan?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Cada acertijo tiene vinculadas una serie de pistas a las que se
              puede acceder con el icono de la bombilla, situado en la esquina
              superior derecha. Las pistas únicamente penalizan con tiempo en
              las rutas “A contrarreloj”. ¡Ojo! El tiempo de castigo aumenta
              dependiendo de la ayuda que ofrece la pista, es decir, la pista 3
              supondrá una sanción mayor que la 2 y la sanción de la pista 2 mas
              que la 1.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿En qué idioma se encuentra disponible?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Exity es una plataforma multidioma. Detectamos el idioma de tu
              dispositivo y te mostramos las aventuras y toda la app en tu
              idioma, ¡¡¡ya tenemos 6!!! Y si no tenemos tu idioma te lo
              mostraremos en inglés.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Cuándo se puede jugar?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nuestras aventuras están creadas de tal forma que no sea necesario
              acceder a ningún enclave con horario restringido, por lo que se
              puede jugar a cualquier hora y cualquier día. Además, no hay
              limites de participantes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Cuánto dura una aventura?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Cada aventura propone un tiempo orientativo estimado en función de
              la distancia que se debe recorrer y del tiempo que se debe
              invertir en resolver cada acertijo.La duración puede variar por el
              número de paradas, la velocidad, la multitud… pero normalmente
              tardarás en torno a una hora en hacerla.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Tiene limite de edad?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Cada ruta tiene predefinida una edad mínima, o en su defecto para
              todos los públicos (TP), que se ha estimado teniendo en cuenta la
              temática, las imágenes, el camino que hay que recorrer y la
              dificultad de los acertijos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Cuántas personas pueden jugar?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Recomendamos que cada persona utilice su propio dispositivo, así
              podrás competir con tus colegas en las rutas A contrarreloj y,
              además, que sea tu nombre el que aparezca en los rankings. Además,
              muchas de las rutas ofrecen la posibilidad de realizarla en grupo
              de hasta 5 personas y utilizar un único dispositivo, pero eso
              complicará que todos los componentes accedan fácilmente a la
              información del punto, al acertijo y a las pistas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Puedo parar el juego y continuar despues?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sí. No hay ningún problema en parar la ruta y continuar después,
              pero ¡aviso! Si estás realizando una ruta A contrarreloj el tiempo
              seguirá contando.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Cuántas veces puedo hacer una aventura?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nuestras aventuras incluyen acertijos y pruebas que deben
              superarse, por eso no creemos que hacerlas dos veces tenga gracia,
              estás rompiendo la competición. Por eso solo pueden hacerse una
              sola vez por usuario.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Es necesario estar en forma y tener buenas condiciones físicas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No es necesario. Las aventuras Descubre a tu ritmo están creadas
              para que no tengas ninguna preocupación por el tiempo, para que la
              disfrutes sin ningún tipo de presión. Por otro lado, en las rutas
              A contrarreloj, aunque estar en forma puede ayudar, es más
              determinante la resolución rápida de los acertijos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              He encontrado errores en una ruta ¿Qué hago?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tanto los acertijos como la información de las aventuras están en
              constante revisión, pero seguro que algo se nos escapa, por ello,
              si ves cualquier error ayúdanos a corregirlo. Envíanos un email
              informándonos. Al existir acertijos que se relacionan con
              elementos del entorno, es posible que, por algún motivo, ya no
              estén disponibles o hayan sido modificados. ¡Contacta para que
              ningún otro Exiter tenga el mismo problema! También es posible que
              alguna información de los puntos tenga fallos relevantes que deban
              modificarse. ¡No dudes en contactar para que Exity ofrezca una
              información de calidad!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Ojala existiera una aventura sobre...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Exity está en continua expansión. Si quieres que exista una
              aventura sobre una temática específicas nos puedes contactar o
              convertirte en miembro de nuestra red de creador@s, formada por
              cientos de personas como tu que quieren vivir aventuras nuevas.
              Siempre puedes enviarnos un email con tus propuestas ¡Nos
              pondremos en contacto contigo para ver si juntos podemos crear una
              nueva aventura!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Quiero que hagáis una aventura en mi ciudad o destino
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              En Exity trabajamos con multitud de ayuntamientos y empresas
              elaborando aventuras diseñadas de forma personalizada. Échale un
              vistazo a nuestra web de destinos y a la de empresa y ponte en
              contacto con nuestro equipo para concretar especificaciones,
              necesidades y tarifas de la aventura que quieres que
              desarrollemos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Quiero darme de baja</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Rellena este formulario de baja.</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
