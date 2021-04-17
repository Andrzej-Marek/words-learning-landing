import React, { FC } from "react";

interface OwnProps {
  setAcceptedCookie: () => void;
}

type Props = OwnProps;

const CookieInformation: FC<Props> = ({ setAcceptedCookie }) => {
  const onAcceptCookie = () => {
    if (typeof window === "undefined") {
      return;
    }
    localStorage.setItem("cookie-accept", "true");
    setAcceptedCookie();
  };
  return (
    <div className="cookie-footer">
      <div style={{ marginRight: "10px" }}>Ta strona używa cookie </div>
      <a
        href="documents/wordswheel_polityka_prywatnosci.pdf"
        target="_href"
        rel="noreferrer"
        style={{ marginRight: "10px" }}
      >
        {" "}
        Sprawdź naszą politykę prywatności
      </a>
      <button className="btn-solid-reg" onClick={onAcceptCookie}>
        Akceptuj
      </button>
    </div>
  );
};

export default CookieInformation;
