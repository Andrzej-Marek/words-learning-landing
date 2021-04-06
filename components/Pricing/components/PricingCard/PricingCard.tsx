import React, { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PriceFeature } from "./pracingCard.types";

interface OwnProps {
  title: string;
  description: string;
  monthlyPrice: string;
  currency?: string;
  features: PriceFeature[];
}

type Props = OwnProps;

const PricingCard: FC<Props> = ({
  currency,
  description,
  features,
  monthlyPrice,
  title,
}) => {
  const { t } = useTranslation("pricing");
  const featuresList = useMemo(
    () =>
      features.map((feature, index) => (
        <li className="media" key={index.toString()}>
          <i className={`fas ${feature.include ? "fa-check" : "fa-times"}`}></i>
          <div className="media-body">{feature.label}</div>
        </li>
      )),
    [features]
  );
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-subtitle">{description}</div>
        <hr className="cell-divide-hr" />
        <div className="price">
          {currency && <span className="currency">{currency}</span>}
          <span className="value">{monthlyPrice}</span>
          {currency && <div className="frequency">{t("monthly")}</div>}
        </div>
        <hr className="cell-divide-hr" />
        <ul className="list-unstyled li-space-lg">{featuresList}</ul>
        {/* <div className="button-wrapper">
          <a className="btn-solid-reg page-scroll" href="#request">
            REQUEST
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default PricingCard;
