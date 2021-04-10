import { useRouter } from "next/router";
import Link from "next/link";
import React, { FC, useMemo } from "react";
import { Link as ReactScroll } from "react-scroll";
import styled from "styled-components";

interface OwnProps {
  to: string;
  label: string;
  onClick?: () => void;
  pageRoute: string;
  type: "scroll" | "link";
}

type Props = OwnProps;

const ScrollLink: FC<Props> = ({ to, label, onClick, pageRoute, type }) => {
  const router = useRouter();

  const link = useMemo(() => {
    if (type === "link") {
      return <Link href={`/${to}`}>{label}</Link>;
    }

    if (router.route === pageRoute) {
      return (
        <StyledReactLink
          activeClass="active"
          to={to}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={onClick}
        >
          {label}
        </StyledReactLink>
      );
    }

    return <Link href={`/#${to}`}>{label}</Link>;
  }, [router.route, pageRoute]);
  return <LinkItem>{link}</LinkItem>;
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

  a {
    color: #222;
    text-decoration: none;
    font-size: inherit;
    cursor: pointer;
  }
  a:hover {
    text-decoration: none;
  }
`;

const StyledReactLink = styled(ReactScroll)`
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
