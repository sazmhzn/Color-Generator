import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-2 min-h-screen flex flex-col justify-start">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
