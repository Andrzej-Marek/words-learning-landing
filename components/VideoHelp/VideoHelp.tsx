import React, { FC } from "react";
import Collapse from "../Collapse/Collapse";
import ContentTitle from "../ContentTitle/ContentTitle";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

interface OwnProps {}

type Props = OwnProps;

const VideoHelp: FC<Props> = () => {
  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto" }} id="video-help">
      <ContentTitle title="Pomoc Video" />
      <div style={{ boxShadow: "0px 0px 2px 1px rgba(115, 140, 242, 0.2)" }}>
        <Collapse
          title="Jak mogę zainstalować wtyczkę?"
          content={
            <VideoPlayer url="https://www.youtube.com/watch?v=M5VdWSVMP0Q&ab_channel=wordswheel" />
          }
        />
        <Collapse
          title="Jak mogę generować fiszki?"
          content={<VideoPlayer url="https://youtu.be/pfuowy-Wn2A" />}
        />
        <Collapse
          title="Jak mogę dodać i usunąć słówka z ulubionych?"
          content={<VideoPlayer url="https://youtu.be/pjD2bs4fjD8" />}
        />
      </div>
    </div>
  );
};

export default VideoHelp;
