import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import {
  CookieInformation,
  Details,
  Footer,
  GlobalStyle,
  Header,
  HomePageHead,
  NavBar,
  Pricing,
  Services,
  VideoContent,
  VideoHelp,
} from "../components";

export default function Home() {
  const [haveAcceptedCookie, setHaveAcceptedCookie] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const localStorageKey = localStorage.getItem("cookie-accept");
    const hasAcceptedCookie = localStorageKey
      ? localStorageKey === "true"
      : false;
    setHaveAcceptedCookie(hasAcceptedCookie);
  }, []);

  return (
    <>
      {!haveAcceptedCookie && (
        <CookieInformation
          setAcceptedCookie={() => setHaveAcceptedCookie(true)}
        />
      )}
      <HomePageHead />
      <GlobalStyle />
      <NavBar />
      <Header />
      <Services />
      <Details />
      <VideoContent />
      <Pricing />
      <VideoHelp />
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
      "pricing",
    ])),
  },
});
