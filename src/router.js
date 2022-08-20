import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./login";
import Cheklist from "./cheklist";
import CheklistItem from "./CheklistItem";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace="true" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checklist" element={<Cheklist />} />
        <Route path="/cheklisitem/:id" element={<CheklistItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
