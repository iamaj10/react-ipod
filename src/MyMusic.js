import React from "react";
import image from "../src/assets/images/titanium.webp";
class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isMounted: true,
    };
  }

  componentDidMount() {
    this.props.audio.play();
    this.state.isMounted = true;

    this.props.audio.addEventListener("timeupdate", () => {
      if (this.state.isMounted) {
        const currentTime = this.props.audio.currentTime;
        this.setState({ currentTime });
        var pos = this.props.audio.currentTime / this.props.audio.duration;
        let fill = document.getElementById("fill");
        console.log("Fill", fill);

        if (fill !== null) {
          fill.style.width = pos * 100 + "%";
        }
      }
    });

    this.updateTimeInterval = setInterval(this.updateTime, 1000);
  }

  updateTime = () => {
    this.setState({
      audio: this.props.audio,
    });
  };

  componentWillUnmount() {
    this.state.isMounted = false;

    clearInterval(this.updateTimeInterval);
  }

  render() {
    let audio = this.props.audio;
    return (
      <div style={styles.myMusicContainer}>
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>My Music</p>
        </div>

        <div style={styles.info}>
          <img style={styles.image} src={image}></img>
          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}>Titanium</h4>
            <p style={{ marginBottom: "0" }}>Alisha Sutudo</p>
          </div>
        </div>

        <div style={styles.statusBar}>
          <p style={styles.currTime}>
            {audio !== null ? Math.floor(audio.currentTime) : "0 / 0"}
          </p>
          <div style={styles.seekBar}>
            <div style={styles.fill} id="fill"></div>
          </div>
          <p style={styles.dur}>
            {audio != null ? Math.floor(audio.duration) : "0 / 0"}
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  myMusicContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: "100%",
    width: "40%",
    alignSelf: "left",
  },
  info: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statusBar: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  subInfo: {
    alignSelf: "center",
  },
  seekBar: {
    width: "70%",
    height: "20%",
    border: "1px solid grey",
    borderRadius: "20px",
    cursor: "pointer",
    alignSelf: "center",
    display: "flex",
  },
  fill: {
    height: "100%",
    backgroundColor: "royalblue",
    width: "0",
    borderRadius: "20px",
  },
  currTime: {
    margin: "0",
    alignSelf: "center",
  },
  dur: {
    margin: "0",
    alignSelf: "center",
  },
  titleBar: {
    borderRadius: "12px 0 0 0",
    padding: "1px 5px 10px 8px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "center",
  },
  battery: {
    width: "20px",
    height: "20px",
  },
};

export default MyMusic;
