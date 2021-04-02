import React, { FC } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

interface OwnProps {
  to: string;
  label: string;
  onClick?: () => void;
}

type Props = OwnProps;

const ScrollLink: FC<Props> = ({ to, label, onClick }) => {
  return (
    <LinkItem>
      <StyledLink
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={onClick}
      >
        {label}
      </StyledLink>
    </LinkItem>
  );
};

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #0aaae4;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;

  :hover {
    text-decoration: none;
    color: #000;
  }
`;

export default ScrollLink;
