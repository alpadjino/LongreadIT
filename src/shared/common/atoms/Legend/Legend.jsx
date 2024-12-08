import React from 'react';
import legendStyles from "@styles/App/Legend.module.scss";
import { Divider } from '../Divider/Divider';
import Logo from "@assets/img/logo-stankin.png";

export const Legend = ({ borderColor, chapter }) => {
  return (
    <div
      style={{ borderColor, borderWidth: "2px" }}
      className={legendStyles.container}
    >
      <div className={legendStyles.image}>
        <img src={Logo} alt="Логотип" style={{ borderRadius: 0 }} />
      </div>
      <div
        style={{ borderColor, borderWidth: "2px" }}
        className={legendStyles.text}
      >
        <p className={legendStyles.chapter}>Глава {chapter}</p>
        <Divider COLOR={borderColor} />
        <p className={legendStyles.signature}>МГТУ СТАНКИН ~ Самохин Дмитрий</p>
      </div>
    </div>
  );
}
