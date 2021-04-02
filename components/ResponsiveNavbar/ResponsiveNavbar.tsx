import React, { useMemo } from "react";
import Image from "next/image";
import styled from "styled-components";
import { NavLinks } from "./NavLinks";
import { DeviceSize } from "./responsive";
import { MobileNavLinks } from "./MobileNavLinks";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #fff;
  z-index: 999;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function ResponsiveNavbar(props) {
  const { t } = useTranslation("nav");
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  const links = [
    {
      label: t("service"),
      to: "services",
    },
    {
      label: t("details"),
      to: "details",
    },
    {
      label: t("howItWords"),
      to: "video",
    },
  ];

  return (
    <NavbarContainer>
      <LeftSection>
        <Image
          src="/images/logo.svg"
          alt="wordswheel.com"
          width={200}
          height="auto"
        />
      </LeftSection>
      <MiddleSection />
      <RightSection>
        {!isMobile && <NavLinks links={links} />}
        {isMobile && <MobileNavLinks links={links} />}
      </RightSection>
    </NavbarContainer>
  );
}
