import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player/lazy";

interface OwnProps {}

type Props = OwnProps;

const VideoContent: FC<Props> = () => {
  const { t } = useTranslation("videoContent");
  return (
    <div className="basic-3" id="video">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>{t("title")}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <div className="video-wrapper">
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
