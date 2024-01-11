import { Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <div className="p-4">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
