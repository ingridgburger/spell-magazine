import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Read from "./pages/Read";
import ReadEdition from "./pages/ReadEdition";
import About from "./pages/About";
import Support from "./pages/Support";

function ScrollRevealManager() {
  const location = useLocation();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal-item"));

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    let nonFixedRevealIndex = 0;

    elements.forEach((element) => {
      element.classList.remove("is-visible");

      if (element.classList.contains("reveal-fixed-left")) {
        element.dataset.revealDirection = "left";
      } else if (element.classList.contains("reveal-fixed-right")) {
        element.dataset.revealDirection = "right";
      } else {
        if (nonFixedRevealIndex === 0) {
          element.dataset.revealDirection = "up";
        } else {
          element.dataset.revealDirection =
            nonFixedRevealIndex % 2 === 1 ? "left" : "right";
        }

        nonFixedRevealIndex += 1;
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollRevealManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/read" element={<Read />} />
        <Route path="/read/:editionId" element={<ReadEdition />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
