import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Admin from "./Admin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="dashboard" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
