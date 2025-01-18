// App.jsx
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
