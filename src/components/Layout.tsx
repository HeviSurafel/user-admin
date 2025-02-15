
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
