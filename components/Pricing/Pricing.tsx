import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { PriceFeature } from "./components/PricingCard/pracingCard.types";
import PricingCard from "./components/PricingCard/PricingCard";

interface OwnProps {}

type Props = OwnProps;
interface PlanFeaturesArgs {
  savedWordsAmounts: number;
  languageProfileAmounts: number;
  practiseSetAmounts: number;
}

const Pricing: FC<Props> = () => {
  const { t } = useTranslation("pricing");
  const planFeatures = ({
    languageProfileAmounts,
    practiseSetAmounts,
    savedWordsAmounts,
  }: PlanFeaturesArgs): PriceFeature[] => [
    {
      include: true,
      label: t("pricing:options.unlimitedTranslations"),
    },
    { include: true, label: t("pricing:options.flashCards") },
    {
      include: true,
      label: t("pricing:options.savedWordsAmounts", {
        amount: savedWordsAmounts,
      }),
    },
    {
      include: true,
      label: t("pricing:options.languageProfileAmounts", {
        amount: languageProfileAmounts,
      }),
    },
    {
      include: true,
      label: t("pricing:options.practiseSetAmounts", {
        amount: practiseSetAmounts,
      }),
    },
  ];

  return (
    <div id="pricing" className="cards-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>{t("pricing:title")}</h2>
            <p className="p-heading p-large">{t("pricing:description")}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <PricingCard
              description={t("pricing:free.description")}
              features={[
                ...planFeatures({
                  languageProfileAmounts: 1,
                  practiseSetAmounts: 5,
                  savedWordsAmounts: 40,
                }),
                { include: false, label: t("pricing:options.fastSupport") },
              ]}
              title={t("pricing:free.title")}
              currency="PLN"
              monthlyPrice="0"
            />

            <PricingCard
              currency="PLN"
              description={t("pricing:normal.description")}
              features={[
                ...planFeatures({
                  languageProfileAmounts: 3,
                  practiseSetAmounts: 10,
                  savedWordsAmounts: 100,
                }),
                { include: false, label: t("pricing:options.fastSupport") },
              ]}
              title={t("pricing:normal.title")}
              monthlyPrice="20"
            />

            <PricingCard
              currency="PLN"
              description={t("pricing:pro.description")}
              features={[
                ...planFeatures({
                  languageProfileAmounts: 5,
                  practiseSetAmounts: 30,
                  savedWordsAmounts: 300,
                }),
                { include: true, label: t("pricing:options.fastSupport") },
              ]}
              title={t("pricing:pro.title")}
              monthlyPrice="50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
