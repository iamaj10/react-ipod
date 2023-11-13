import React from "react";

class Games extends React.Component {
  render() {
    return (
      <div style={styles.settings}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            class="fa-solid fa-gamepad"
            style={{ color: "#d53030", scale: "2" }}
          ></i>
          <div style={{ marginTop: "20px" }}>Games</div>
        </div>
      </div>
    );
  }
}

const styles = {
  settings: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    height: "100%",
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

export default Games;
