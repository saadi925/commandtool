import { Outlet } from "react-router-dom";
import { AppHeader } from "./components";
const RootLayout = () => {
  return (
    <div className="font-roboto">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default RootLayout;
