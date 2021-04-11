import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { InstructionStep } from "./components";
interface OwnProps {}

type Props = OwnProps;

const HowToUse: FC<Props> = () => {
  const { t } = useTranslation("details");
  return (
    <>
      <div id="details" style={{ paddingTop: "100px" }}>
        <InstructionStep
          title="1. Zaloguj się do aplikacji"
          description="Dzięki opcji zaloguj się przez google, Twoje dane są bezpieczne"
          imageSrc="images/howToUse/login.png"
        />
        <InstructionStep
          title="2. Utwórz profil językowy"
          description="Profil językowy zapisuje twoje słowa oraz wskazuje z jakiego języka na jaki ma je tłumaczyć"
          imageSrc="images/howToUse/createLanguageProfile.png"
        />
        <InstructionStep
          title="3. Pobierz swój klucz do wtyczki"
          description="Dzięki temu kluczowi połączysz swoją aplikację z wtyczką"
          imageSrc="images/howToUse/getAccessKey.png"
        />
        <InstructionStep
          title={
            <div>
              4. Pobierz{" "}
              <a
                target="_blank"
                href="https://chrome.google.com/webstore/detail/words-wheel-wordswheelcom/glahemkpfllbiggkcakjbnlnindpaifd?hl=en&authuser=0"
                rel="noreferrer"
              >
                wtyczkę
              </a>{" "}
              do przeglądarki Google Chrome
            </div>
          }
          description="Pamiętaj, aby używać tej wtyczki musisz być użytkownikiem przeglądarki Google Chrome!"
          imageSrc="images/howToUse/downloadChromeExtension.png"
        />
        <InstructionStep
          title="5. Przejdź do wtyczki i wklej swój klucz dostępu"
          description="Ikonka wtyczki powinna pojawić się w górnym prawym rogu ekranu przeglądarki"
          imageSrc="images/howToUse/pasteAccessKey.png"
        />
        <InstructionStep
          title="6. Tłumacz słowa i wyrażenia na stronach internetowych!"
          description="Zaznacz słowo które Cie interesuje, pojawi się mały kwadracik, na który wystarczy kliknąć, aby przetłumaczyć dane słowo"
          imageSrc="images/howToUse/translate.png"
        />
      </div>
    </>
  );
};

export default HowToUse;
