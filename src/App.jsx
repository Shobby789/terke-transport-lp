import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
import Loader from "./components/Global/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
