import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableSample from "../../components/TableSample";

export const BaseRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sampletable" element={<TableSample />} />
      </Routes>
    </BrowserRouter>
  );
};
