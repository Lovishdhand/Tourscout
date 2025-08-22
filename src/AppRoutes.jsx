import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Admin from "./Pages/Admin";
import AddUser from "./Pages/AddUser";
import Userlist from "./Pages/Userlist";
import AddAlbum from "./Pages/AddAlbum";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="dashboard" element={<Admin />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="addalbum" element={<AddAlbum />} />
        <Route path="userlist" element={<Userlist />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
