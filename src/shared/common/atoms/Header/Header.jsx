import React from 'react';
import headerStyles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.headerText}>
        <h3 className={headerStyles.longread}>ЛОНГРИД</h3>
        <h3 className={headerStyles.title}>
          ОСНОВНЫЕ НАПРАВЛЕНИЯ РАЗВИТИЯ <br /> 
          СОВРЕМЕННЫХ ИНТЕРНЕТ ТЕХНОЛОГИЙ
        </h3>
      </div>
    </div>
  );
}
