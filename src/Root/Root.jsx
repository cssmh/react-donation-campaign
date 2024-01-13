import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Donation from "../NavComponent/Donation/Donation";
import Home from "../NavComponent/Home/Home";
import Statistics from "../NavComponent/Statistics/Statistics";

const Root = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/donation",
          element: <Donation></Donation>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        }
      ]
    },
  ]);

export default Root;