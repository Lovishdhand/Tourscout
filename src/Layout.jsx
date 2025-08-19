import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminComponents/AdminHeader";
import Footer from "./Components/Footer";


export default function Layout() {
  return (
    <>
    <div className="layout">

  
      <AdminHeader />
      <main className="content">
        <Outlet />  
      </main>

      <Footer />
        </div>
    </>
  );
}
