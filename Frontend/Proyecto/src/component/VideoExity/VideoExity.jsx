import { Grid } from "@mui/material";
import ReactPlayer from "react-player";
import "./VideoExity.css";

export default function VideoExity() {
  return (
    <Grid
      style={{
        marginTop: "40px",
        marginLeft: "24px",
      }}
    >
      <ReactPlayer
        className="videoContainer"
        url="https://www.dropbox.com/s/8hw52wr0mholefa/Exity_home.mp4?dl=0"
        playing={true}
        loop={true}
        muted={true}
      />
    </Grid>
  );
}
