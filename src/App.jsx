import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing.jsx";
import Access from "./pages/Access.jsx";
import Lookbook from "./pages/Lookbook.jsx";
import Header from "./components/Header.jsx";
import PageTransition from "./components/PageTransition.jsx";

export default function App() {
  const location = useLocation();

  // Only show header on lookbook
  const showHeader = location.pathname.startsWith("/lookbook");

  return (
    <>
      {showHeader && <Header />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Landing />
              </PageTransition>
            }
          />
          <Route
            path="/access"
            element={
              <PageTransition>
                <Access />
              </PageTransition>
            }
          />
          <Route
            path="/lookbook"
            element={
              <PageTransition>
                <Lookbook />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
