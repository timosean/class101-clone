import React, { useState } from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import CategoryNavbar from "./components/CategoryNavbar";
import BottomNavigation from "./components/BottomNavigation";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <TopBanner />
      <Header />
      <CategoryNavbar />
      <HomePage />
      <BottomNavigation />
    </>
  );
}

export default App;
