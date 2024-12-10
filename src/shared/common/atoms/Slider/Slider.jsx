import { Component } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Perspective, Arrow } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import styles from "@styles/App/Carousel.module.scss";

export default class DemoComponent extends Component {
  _plugins = [new Perspective({ rotate: 0.2 }), new Arrow()];

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  images = this.props.images;
  
  componentDidMount() {
    this.setState({ currentIndex: 0 });
  }

  handleMove = (e) => {
    this.setState({ currentIndex: e.index });
  };

  render() {
    return (
      <div className={styles.carouselContainer}>
        {this.images && (
          <Flicking
            key={this.state.currentIndex}
            plugins={this._plugins}
            style={{ overflow: "visible" }}
            onMove={this.handleMove}
          >
            {this.images.map((image, index) => (
              <div
                key={index + 1}
                style={{ position: "relative" }}
                className={styles.cardPanel}
              >
                <img
                  style={{
                    objectFit: "fit",
                    height: "100%",
                    width: "100%",
                    pointerEvents: "none",
                    filter: image.image ? "brightness(50%)" : "",
                  }}
                  src={image.image ?? image}
                />
                {image.text && (
                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "inherit",
                      textAlign: "center",
                    }}
                  >
                    {image.text.title && <h3>{image.text.title}</h3>}
                    {image.text.text && <p>{image.text.text}</p>}
                  </div>
                )}
              </div>
            ))}
            <ViewportSlot>
              <span className="flicking-arrow-prev is-outside"></span>
              <span className="flicking-arrow-next is-outside"></span>
            </ViewportSlot>
          </Flicking>
        )}
      </div>
    );
  }
}
