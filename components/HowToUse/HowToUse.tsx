import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import ContentTitle from "../ContentTitle/ContentTitle";
import UseInstruction from "../UseInstruction/UseInstruction";
import VideoHelp from "../VideoHelp/VideoHelp";

interface OwnProps {}

type Props = OwnProps;

const HowToUse: FC<Props> = () => {
  const { t } = useTranslation("details");
  return (
    <>
      <div
        id="details"
        style={{ paddingTop: "100px", maxWidth: "1140px", margin: "0 auto" }}
      >
        <ContentTitle title="Pierwsze Użycie" />
        <UseInstruction />
        <VideoHelp />
      </div>
    </>
  );
};

export default HowToUse;
