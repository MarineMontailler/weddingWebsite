import React from "react";
import MainPage from "./containers/MainPage";
import "./App.css";
import {
  Switch,
  Route,
} from "react-router-dom";
import Album from "./containers/album/Album";
import HeaderContent from "./containers/HeaderContent";
import MainPageHeader from "./components/MainPageHeader";
import MainPageLayout from "./components/MainPageLayout";
import MainPageNavbar from "./components/MainPageNavbar";
import NavbarContent from "./containers/NavbarContent";

function App() {
  return (
    <div>
      <MainPageLayout>
        <MainPageHeader>
          <HeaderContent />
        </MainPageHeader>
        <MainPageNavbar>
          <NavbarContent />
      </MainPageNavbar>     
      <div>
        <Switch>
          <Route path="/album" component={Album}>
          </Route>
          <Route path="/">
            <MainPage/>
          </Route>
        </Switch>
      </div>
        </MainPageLayout>
    </div>
  );
}

export default App;
