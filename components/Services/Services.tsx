import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface OwnProps {}

type Props = OwnProps;

const Services: FC<Props> = () => {
  const { t } = useTranslation("services");
  return (
    <div id="services" className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>{t("mainTitle")}</h2>
            <p className="p-heading p-large">{t("description")}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <img
                className="card-image"
                src="images/services-icon-1.svg"
                alt="alternative"
              />
              <div className="card-body">
                <h4 className="card-title">{t("tile1.title")}</h4>
                <p>{t("tile1.description")}</p>
              </div>
            </div>

            <div className="card">
              <img
                className="card-image"
                src="images/services-icon-2.svg"
                alt="alternative"
              />
              <div className="card-body">
                <h4 className="card-title">{t("tile2.title")}</h4>
                <p>{t("tile2.description")}</p>
              </div>
            </div>

            <div className="card">
              <img
                className="card-image"
                src="images/services-icon-3.svg"
                alt="alternative"
              />
              <div className="card-body">
                <h4 className="card-title">{t("tile3.title")}</h4>
                <p>{t("tile3.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
