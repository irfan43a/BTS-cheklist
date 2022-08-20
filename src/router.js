import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./login";
import Cheklist from "./cheklist";
import CheklistItem from "./CheklistItem";
import GetItemIncheklist from "./getItemIncheklist";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace="true" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checklist" element={<Cheklist />} />
        <Route path="/cheklisitem/:id" element={<CheklistItem />} />
        <Route path="/cheklisitem/:id/itembyid/:iditem" element={<GetItemIncheklist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
