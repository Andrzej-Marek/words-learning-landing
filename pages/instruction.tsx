import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { FC } from "react";
import {
  HomePageHead,
  GlobalStyle,
  NavBar,
  HowToUse,
  Footer,
} from "../components";

interface OwnProps {}

type Props = OwnProps;

const Instruction: FC<Props> = () => {
  return (
    <div>
      <HomePageHead />
      <GlobalStyle />
      <NavBar />
      <HowToUse />
      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "header",
      "common",
      "services",
      "details",
      "videoContent",
      "footer",
      "nav",
      "pricing",
    ])),
  },
});

export default Instruction;
