import React from 'react'
import classNames from 'classnames'
import chapterStyles from "@styles/App/ChapterTemplate.module.scss";
import { Divider } from '@common/atoms/Divider/Divider';
import { Legend } from '@common/atoms/Legend/Legend';
import Slider from '@common/atoms/Slider/Slider'
import { ImageOverlay } from '@common/atoms/ImageOverlay/ImageOverlay';

export const ChapterTemplate = ({
  children,
  titleInfo,
  chapterNumber,
  blocks,
  isWhite,
}) => {
  const { titleImage, titleName, titleSubName, titleText, name } = titleInfo;
  const chapterClassname = classNames(chapterStyles.chapter, {
    [chapterStyles.chapterWhite]: isWhite,
  });
  console.log(blocks)
  return (
    <div id={titleName} className={chapterClassname}>
      <div>
        <div id={name} className={chapterStyles.header} style={{ gap: "10px" }}>
          <div className={chapterStyles.content} style={{ gap: "50px" }}>
            <div className={chapterStyles.image} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <img
                src={titleImage ?? null}
                alt="Картинка"
                style={{ maxWidth: "100%", maxHeight: "100%", boxShadow: 'none' }}
              />
            <Legend
              borderColor={!isWhite ? "white" : "#262626"}
              chapter={`${chapterNumber}: ${titleName}`}
            />
            </div>
            <div className={chapterStyles.text}>
              <h1>Глава {chapterNumber}</h1>
              <h3>{titleName}</h3>
              <Divider COLOR={!isWhite ? "white" : "#262626"} />
              <h2>{titleSubName}</h2>
              <p>{titleText}</p>
            </div>
          </div>
        </div>
      </div>
      <Divider COLOR={!isWhite ? "white" : "#262626"} />
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {blocks &&
          blocks.map((block) => (
            <React.Fragment>
              <div id={block.title} className={chapterStyles.contentBlock}>
                <div className={chapterStyles.textBlock}>
                  <div className={chapterStyles.contentTitle}>
                    <h2>{block.title}</h2>
                  </div>
                  <div className={chapterStyles.contentText}>
                    {Array.isArray(block.text) ? (
                      block.text.map((subText) => <p>{subText}</p>)
                    ) : (
                      <p>{block.text}</p>
                    )}
                  </div>
                </div>
                <div>
                  {Array.isArray(block.image) ? (
                    <Slider images={block.image} />
                  ) : (
                    <div className={chapterStyles.contentImage}>
                      <ImageOverlay image={block.image} source={block.source} />
                    </div>
                  )}
                </div>
              </div>
              <Divider COLOR={!isWhite ? "white" : "#262626"} />
            </React.Fragment>
          ))}
      </div>
      {children}
    </div>
  );
};
