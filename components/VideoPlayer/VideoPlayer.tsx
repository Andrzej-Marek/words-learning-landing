import React, { FC } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

interface OwnProps {
  url: string;
}

type Props = OwnProps;

const VideoPlayer: FC<Props> = ({ url }) => {
  return (
    <Wrapper>
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  position: relative;
  display: flex;
  justify-content: center;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export default VideoPlayer;
