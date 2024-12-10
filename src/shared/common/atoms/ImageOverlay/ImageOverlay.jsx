import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from './ImageOverlay.module.scss';

export const ImageOverlay = ({ image, source }) => {
  const [isOpenImage, setIsOpenImage] = useState(false);
  const switchIsOpenImage = () => setIsOpenImage((prev) => !prev);

  useEffect(() => {
    if (isOpenImage) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [isOpenImage]);

  return (
    <div>
      {isOpenImage &&
        createPortal(
          <div onClick={switchIsOpenImage} className={styles.imageOverlay}>
            <img src={image} alt="Изображение в увеличенном виде" />
          </div>,
          document.body
        )}
      {source ? (
        <div className={styles.shadowBorder}>
          <img
            src={image}
            alt="Изображение"
            onClick={switchIsOpenImage}
            className={styles.defaultImage}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <div
            style={{
              textAlign: "right",
              paddingBottom: "15px",
              paddingTop: "10px",
            }}
          >
            <a href={source}>Источник: {source}</a>
          </div>
        </div>
      ) : (
        <img
          src={image}
          alt="Изображение"
          onClick={switchIsOpenImage}
          className={styles.defaultImage}
        />
      )}
    </div>
  );
};
