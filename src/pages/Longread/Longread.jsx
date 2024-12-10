import React from 'react'
import { Header } from '@common/atoms/Header/Header';
import longreadStyles from '@styles/App/Longread.module.scss';
import { ChapterTemplate } from '@common/molecules/ChapterTemplate/ChapterTemplate';
import { longread } from "@constants/chapterContent";
import Breadcrumbs from '@common/atoms/Breadcrumbs/Breadcrumbs';
import { Footer } from '@common/atoms/Footer/Footer';


export const Longread = () => {
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          top: 0,
          zIndex: 9999,
        }}
      >
        <Breadcrumbs longread={longread} />
      </div>
      {/* <div style={{ position: "fixed", bottom: 0, right: "45%", zIndex: 999 }}>
        <Player />
      </div> */}
      <Header />
      <div className={longreadStyles.chapterContainer}>
        {longread.map((chapter, index) => (
          <div className={longreadStyles.chapter}>
            <ChapterTemplate
              titleInfo={chapter.title}
              blocks={chapter.blocks}
              chapterNumber={index + 1}
              isWhite={chapter.isWhite}
            ></ChapterTemplate>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
