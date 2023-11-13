import React from "react";
import { ListGroup } from "react-bootstrap";

class Music extends React.Component {
  render() {
    return (
      <div style={styles.musicScreen} id="music-screen">
        <div style={styles.menuList} id="menu-list">
          <div style={styles.titleBar}>
            <p style={{ fontWeight: "bold" }}>Music</p>
          </div>
          <ListGroup style={{ borderRadius: "0" }}>
            <ListGroup.Item
              style={{
                border: "0",
                padding: "0.2rem 0.6rem",
                backgroundColor:
                  this.props.activeItem === "MyMusic" ? "aqua" : "white",
              }}
              className={this.props.activeItem === "MyMusic" ? "active" : ""}
            >
              My Music{" "}
              {this.props.activeItem === "MyMusic" ? (
                <i
                  class="fa-solid fa-chevron-right"
                  style={{ float: "right" }}
                ></i>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                border: "0",
                padding: "0.2rem 0.6rem",
                backgroundColor:
                  this.props.activeItem === "Artists" ? "aqua" : "white",
              }}
              className={this.props.activeItem === "Artists" ? "active" : ""}
            >
              Artists{" "}
              {this.props.activeItem === "Artists" ? (
                <i
                  class="fa-solid fa-chevron-right"
                  style={{ float: "right" }}
                ></i>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                border: "0",
                padding: "0.2rem 0.6rem",
                backgroundColor:
                  this.props.activeItem === "Album" ? "aqua" : "white",
              }}
              className={this.props.activeItem === "Album" ? "active" : ""}
            >
              Album{" "}
              {this.props.activeItem === "Album" ? (
                <i
                  class="fa-solid fa-chevron-right"
                  style={{ float: "right" }}
                ></i>
              ) : (
                ""
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div style={styles.imageContainer} id="image-container"></div>
      </div>
    );
  }
}

const styles = {
  musicScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirecton: "row",
  },
  menuList: {
    //border:'1px solid black',
    height: "100%",
    width: "50%",
    boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
    zIndex: "1",
  },
  imageContainer: {
    //border:'1px solid black',
    height: "100%",
    width: "50%",
    backgroundImage:
      'url("https://i.pinimg.com/originals/b5/ca/9a/b5ca9a6c64b6a5c445dc993dd6294d10.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 12px 12px 0",
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

export default Music;
