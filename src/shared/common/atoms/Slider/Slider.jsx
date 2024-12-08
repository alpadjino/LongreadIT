import { Component } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Perspective, Arrow } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import styles from "@styles/App/Carousel.module.scss";

export default class DemoComponent extends Component {
  _plugins = [new Perspective({ rotate: 0.2 }), new Arrow()];
  
  images = this.props.images;
  
  render() {
    return (
      <div className={styles.carouselContainer}>
        {this.images && (
          <Flicking plugins={this._plugins} style={{ overflow: "visible" }}>
            {this.images.map((image) => (
              <div
                style={{ position: "relative" }}
                className={styles.cardPanel}
              >
                <img
                  style={{
                    objectFit: "fit",
                    height: "100%",
                    width: "100%",
                    pointerEvents: "none",
                    filter: image.image ? "brightness(50%)" : '',
                  }}
                  src={image.image ?? image}
                />
                {image.text && (
                  <div style={{ position: "absolute" }}>
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
