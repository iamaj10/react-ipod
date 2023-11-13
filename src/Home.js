import React from "react";
import { ListGroup } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div style={styles.homeScreen} id="home-screen">
        <div style={styles.menuList} id="menu-list">
          <div style={styles.titleBar}>
            <p style={{ fontWeight: "bold" }}>IPod </p>
          </div>
          <ListGroup style={{ borderRadius: "0" }}>
            <ListGroup.Item
              style={{
                border: "0",
                padding: "0.2rem 0.6rem",
                backgroundColor:
                  this.props.activeItem === "CoverScreen" ? "aqua" : "white",
              }}
              className={
                this.props.activeItem === "CoverScreen" ? "active" : ""
              }
            >
              Cover Screen{" "}
              {this.props.activeItem === "CoverScreen" ? (
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
                  this.props.activeItem === "Music" ? "aqua" : "white",
              }}
              className={this.props.activeItem === "Music" ? "active" : ""}
            >
              Music{" "}
              {this.props.activeItem === "Music" ? (
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
                  this.props.activeItem === "Games" ? "aqua" : "white",
              }}
              className={this.props.activeItem === "Games" ? "active" : ""}
            >
              Games{" "}
              {this.props.activeItem === "Games" ? (
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
                  this.props.activeItem === "Settings" ? "aqua" : "white",
              }}
              className={this.props.activeItem === "Settings" ? "active" : ""}
            >
              Settings{" "}
              {this.props.activeItem === "Settings" ? (
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
  homeScreen: {
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

export default Home;
