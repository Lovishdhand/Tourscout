import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Admin from "./Pages/Admin";
import AddUser from "./Pages/AddUser";
import Userlist from "./Pages/Userlist";
import AddAlbum from "./Pages/AddAlbum";
import Albumlist from "./Pages/Albumlist";
import AddPhoto from "./Pages/AddPhoto";
import Photos from "./Pages/Photos";
import Search from "./Pages/Search";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="dashboard" element={<Admin />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="addalbum" element={<AddAlbum />} />
        <Route path="userlist" element={<Userlist />} />
        <Route path="albumlist" element={<Albumlist />} />
        <Route path="addphoto" element={<AddPhoto />}/>
        <Route path="photos" element={<Photos />}/>
        <Route path="search" element={<Search/>}/>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
