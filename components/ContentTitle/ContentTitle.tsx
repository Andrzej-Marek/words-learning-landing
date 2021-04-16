import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
  title: string;
}

type Props = OwnProps;

const ContentTitle: FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <span>{title}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 25px;

  span {
    font-size: 32px;
    font-weight: 700;
    position: relative;

    /* ::after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 0;
      right: 0;
      width: 30%;
      height: 3px;
      border-top: 4px solid #08b0e1;
    } */
  }
`;

export default ContentTitle;
