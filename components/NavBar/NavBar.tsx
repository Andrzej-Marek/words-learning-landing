import React, { FC } from "react";
import { ResponsiveNavbar } from "../ResponsiveNavbar/ResponsiveNavbar";
interface OwnProps {}

type Props = OwnProps;

const NavBar: FC<Props> = () => {
  return <ResponsiveNavbar />;
};

export default NavBar;
