import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Grid, List, ListItem, ListItemText } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ButtonRanking({ ranking }) {
  const [open, setOpen] = React.useState(false);
  const [rankingView, setRankingView] = useState([]);

  const handleClickOpen = () => {
    setRankingView(ranking);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{ border: "2px solid #26a9e1", color: "#26a9e1" }}
      >
        Ranking
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Ranking"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {rankingView.length > 0 && (
              <List
                sx={{
                  width: "20vw",

                  bgcolor: "background.paper",
                }}
              >
                <ListItem
                  disableGutters
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <table>
                    <tbody>
                      <tr>
                        {rankingView.map((item, index) => (
                          <Grid
                            container
                            justifyContent="space-between"
                            key={index}
                          >
                            {" "}
                            <Grid pr={2}>
                              <th>
                                {`${index + 1} - ${item.nombre} ${
                                  item.apellidos
                                }`}
                              </th>{" "}
                            </Grid>
                            <td className="tabla-tiempo">
                              <ListItemText secondary={item.reloj} />
                            </td>
                          </Grid>
                        ))}
                      </tr>{" "}
                    </tbody>
                  </table>{" "}
                </ListItem>
              </List>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
