import React from "react";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter"
import TabNav from "./components/TabNav.js";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
    </main>
  );
}
