import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Details,
  Footer,
  GlobalStyle,
  Header,
  HomePageHead,
  NavBar,
  Services,
  VideoContent,
} from "../components";

export default function Home() {
  return (
    <>
      <HomePageHead />
      <GlobalStyle />
      <NavBar />
      <Header />
      <Services />
      <Details />
      <VideoContent />
      <Footer />
    </>
  );
}

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
    ])),
  },
});
