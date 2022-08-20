import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./login";
import Cheklist from "./cheklist";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace="true" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checklist" element={<Cheklist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
