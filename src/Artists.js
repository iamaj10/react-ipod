import React from "react";

class Artists extends React.Component {
  render() {
    return (
      <div style={styles.artistsContainer}>
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>Artists</p>
        </div>
      </div>
    );
  }
}

const styles = {
  artistsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  image: {
    width: "2rem",
    height: "2rem",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info2: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  subInfo: {
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

export default Artists;
