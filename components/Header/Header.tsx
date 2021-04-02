import { useTranslation } from "next-i18next";

export default function Header() {
  const { t } = useTranslation(["header", "common"]);
  return (
    <header id="header" className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h1>
                  <span className="turquoise">{t("mainTitle")}</span>{" "}
                  {t("mainTitleSecoundPart")}
                </h1>
                <p className="p-large">{t("description")}</p>
                <a className="btn-solid-lg page-scroll" href="#services">
                  {t("common:check")}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="/images/header-teamwork.svg"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
