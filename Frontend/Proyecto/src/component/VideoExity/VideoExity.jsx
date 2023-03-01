import ReactPlayer from "react-player";

export default function VideoExity() {
  return (
    <div>
      <ReactPlayer
        url="https://www.dropbox.com/s/8hw52wr0mholefa/Exity_home.mp4?dl=0"
        playing={true}
        loop={true}
      />
    </div>
  );
}
