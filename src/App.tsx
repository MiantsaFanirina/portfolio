import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation/Navigation";
import { Cursor } from "./components/Cursor/Cursor";
import { Home } from "./pages/Home/Home";
import { Project } from "./pages/Project/Project";
import { useLanguage } from "./context/LanguageContext";

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return null;
}

export function App() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = t.meta.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t.meta.description);
    }
  }, [t, location.pathname]);

  return (
    <>
      <a href="#top" className="sr-only">
        Skip to content
      </a>
      <Cursor />
      <Navigation />
      <ScrollManager />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
