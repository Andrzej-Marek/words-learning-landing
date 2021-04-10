import React, { FC, ReactNode } from "react";

interface OwnProps {
  title: string | ReactNode;
  description?: string;
  imageSrc: string;
}

type Props = OwnProps;

const InstructionStep: FC<Props> = ({ imageSrc, title, description }) => {
  return (
    <div className="basic-1">
      <div className="container">
        <div className="row" style={{ alignItems: "flex-start" }}>
          <div className="col-lg-6">
            <div className="text-container">
              <h2>{title}</h2>
              {description && <p>{description}</p>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-container">
              <img className="img-fluid" src={imageSrc} alt="alternative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionStep;
