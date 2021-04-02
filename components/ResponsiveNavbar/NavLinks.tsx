import React, { useMemo } from "react";
import styled from "styled-components";
import { ScrollLink } from "../../components";
import { NavLinkList } from "../../types";
import LoginButton from "../LoginButton/LoginButton";

interface Props {
  links: NavLinkList[];
}
export function NavLinks({ links }: Props) {
  const scrollLinksContent = useMemo(
    () =>
      links.map((link) => (
        <ScrollLink to={link.to} label={link.label} key={link.label} />
      )),
    []
  );
  return (
    <NavLinksContainer>
      <LinksWrapper>
        {scrollLinksContent}
        <LoginButton />
      </LinksWrapper>
    </NavLinksContainer>
  );
}

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  align-items: center;

  li {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
