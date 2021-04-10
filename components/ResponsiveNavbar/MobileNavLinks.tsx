import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";
import { ScrollLink } from "..";
import { NavLinkList } from "../../types";
import LoginButton from "../LoginButton/LoginButton";
import Link from "next/link";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 999;

  li {
    margin: 10px 0;
  }
`;

interface Props {
  links: NavLinkList[];
}
export function MobileNavLinks({ links }: Props) {
  const [isOpen, setOpen] = useState(false);

  const scrollLinksContent = useMemo(
    () =>
      links.map((link) => (
        <ScrollLink
          to={link.to}
          label={link.label}
          key={link.label}
          onClick={() => setOpen(false)}
          pageRoute={link.pageRoute}
          type={link.type}
        />
      )),
    []
  );

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          {scrollLinksContent} <LoginButton />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
