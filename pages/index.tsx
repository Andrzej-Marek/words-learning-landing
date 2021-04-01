import {
  Details,
  Footer,
  GlobalStyle,
  Header,
  NavBar,
  Services,
} from "../components";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Header />
      <Services />
      <Details />
      <Footer />
    </>
  );
}
