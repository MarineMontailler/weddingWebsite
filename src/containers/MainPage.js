import React from "react";
import HeaderContent from "./HeaderContent";
import MainPageHeader from "../components/MainPageHeader";
import MainPageLayout from "../components/MainPageLayout";
import MainPageMain from "../components/MainPageMain";
import MainPageNavbar from "../components/MainPageNavbar";
import NavbarContent from "./NavbarContent";
import MainPageContent from "./MainPageContent";

const MainPage = () => {
  return (
    <MainPageLayout>
      <MainPageHeader>
        <HeaderContent />
      </MainPageHeader>

      <MainPageNavbar>
        <NavbarContent />
      </MainPageNavbar>

      <MainPageMain>
        <MainPageContent />
      </MainPageMain>
    </MainPageLayout>
  );
};

export default MainPage;
