import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DCPage, HeroePage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroePage />} />

        </Routes>
      </div>
    </>
  );
};
