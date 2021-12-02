import React from "react";
import "./mprojectMenu.css";


const containerStyle = {
  color: "black",
  width: 550,
  paddingTop: 200
};

const rowStyle = {
  borderRadius: "10px",
  backgroundColor: "none",
};


class Menu extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      
        <div className="all-menu">
          <div className="container" style={containerStyle}>
            <div className="row text-center" style={rowStyle}>
              <div className="col-lg-12">
                <button
                  className="a btn numInput text-reset text-decoration-none text-center fs-3 fw-light"
                  onClick={() => this.nextPath("/Dogs")}
                >
                  Dog Breeds Dashboard
                </button>
              </div>

              <div className="col-lg-12">
                <button
                  className="a btn text-reset text-decoration-none text-center fs-3 fw-light"
                  onClick={() => this.nextPath("/map")}
                >
                  Map
                </button>
              </div>

              <div className="col-lg-12">
                <button
                  className="a btn text-reset text-decoration-none text-center fs-3 fw-light"
                  onClick={() => this.nextPath("/search")}
                >
                  Search
                </button>
              </div>

            </div>
          </div>
        </div>
      
    );
  }
}

export default Menu;
