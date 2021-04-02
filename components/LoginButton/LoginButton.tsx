import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const LoginButton: FC<Props> = () => {
  const { t } = useTranslation("nav");
  return (
    <Wrapper href="https://app.wordswheel.com/login" target="_blank">
      {t("login")}
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: inline-block;
  padding: 8px 30px;
  border-radius: 0.4rem;
  margin: 0 10px;
  border: 2px solid #08b0e1;
  color: #000;
  cursor: pointer;
  transition: 0.4s;
  text-decoration: none;
  text-align: center;
  margin: 10px;

  :hover {
    text-decoration: none;
    background: #08b0e1;
    color: #fff;
  }
`;
export default LoginButton;
