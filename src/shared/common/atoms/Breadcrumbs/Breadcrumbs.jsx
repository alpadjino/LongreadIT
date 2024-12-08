import React, { useCallback, useState } from "react";
import styles from "./Breadcrumbs.module.scss";

const longreadToBreadcrumbs = (longread) => {
  return longread.map((section, index) => {
    const { titleName } = section.title;
    return {
      sectionName: `Глава ${index + 1} ${titleName}`,
      sectionRef: titleName,
      sectionSubMenu: section.blocks.map((block) => ({
        sectionName: block.title,
        sectionRef: block.title,
      })),
    };
  });
};

const Breadcrumbs = ({ longread }) => {
  const [openSubMenu, setOpenSubMenu] = useState("");

  const sections = useCallback(longreadToBreadcrumbs(longread), [longread]);

  const onOpenSubMenu = (sectionRef) => {
    setOpenSubMenu(sectionRef);
  };

  const onCloseSubMenu = () => {
    setOpenSubMenu("");
  };

  return (
    <ul className={styles.container}>
      {sections.map((section) => (
        <li
          key={section.sectionRef}
          className={styles.breadcrumb}
          onMouseEnter={() => onOpenSubMenu(section.sectionRef)}
          onMouseLeave={onCloseSubMenu}
        >
          <a className={styles.link} href={`#${section.sectionRef}`}>
            <span>{section.sectionName}</span>
          </a>
          {section.sectionSubMenu && openSubMenu === section.sectionRef && (
            <ul className={styles.subMenu}>
              {section.sectionSubMenu.map((subSection) => (
                <li key={subSection.sectionRef}>
                  <a
                    className={styles.subLink}
                    href={`#${subSection.sectionRef}`}
                  >
                    <span>{subSection.sectionName}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
