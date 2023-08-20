import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Landingpage";
import { AppScreen } from "../components";
import RootLayout from "../_layout";
import gitCommandsList from "../commands/gitCommands";
import linuxCommandsList from "../commands/LinuxCommands";
import MongoDBCommandsList from "../commands/mongoCommands";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/git-commands-tool/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "git-commands",
          element: (
            <AppScreen
              headingText={"Git & Github Commands "}
              commandList={gitCommandsList}
            />
          ),
        },
        {
          path: "mongodb-commands",
          element: (
            <AppScreen
              headingText={"MongoDb Commands & More"}
              commandList={MongoDBCommandsList}
            />
          ),
        },
        {
          path: "linux-commands",
          element: (
            <AppScreen
              headingText={"Linux Useful Commands"}
              commandList={linuxCommandsList}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
