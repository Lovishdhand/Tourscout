import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminComponents/AdminHeader";
import Footer from "./Components/Footer";

export default function Layout() {
  return (
    <>
      <AdminHeader />
      <main>
        <Outlet />  
      </main>
      <Footer />
    </>
  );
}
