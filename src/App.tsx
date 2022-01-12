import React, { useState } from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import CategoryNavbar from "./components/CategoryNavbar";
import BottomNavigation from "./components/BottomNavigation";
import "./App.css";

function App() {
  return (
    <>
      <TopBanner />
      <Header />
      <CategoryNavbar />
      <BottomNavigation />
    </>
  );
}

export default App;
