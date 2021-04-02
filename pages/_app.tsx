import { appWithTranslation } from "next-i18next";
import "../styles/styles.css";
import "../styles/fontawesome-all.css";
import "../styles/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
