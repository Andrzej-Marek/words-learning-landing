import React, { FC, ReactNode } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";

interface OwnProps {
  title: string;
  content: string | ReactNode;
}

type Props = OwnProps;

const Collapse: FC<Props> = ({ title, content }) => {
  return (
    <Wrapper>
      <Collapsible trigger={title}>
        {typeof content === "string" ? <p>{content}</p> : content}
      </Collapsible>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow: hidden;

  .Collapsible__trigger {
    padding: 20px 10px;
    height: 100%;
    font-weight: 700;
    border-top: 1px solid #eeeef0;
    border-bottom: 1px solid #eeeef0;
    width: 100%;
    display: block;
    cursor: pointer;
  }

  .Collapsible__contentOuter {
    background: #eeeef0;
  }

  .Collapsible__contentInner {
    padding: 15px;
  }
`;

interface ContentProps {
  isOpen: boolean;
}
const Content = styled.div<ContentProps>`
  padding: 10px 15px;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? "100%" : "0px")};
`;

export default Collapse;
