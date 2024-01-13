import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Donation from "../NavComponent/Donation/Donation";
import Home from "../NavComponent/Home/Home";
import Statistics from "../NavComponent/Statistics/Statistics";
import DonationDetails from "../NavComponent/Donation/DonationDetails";

const Root = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          loader: ()=>fetch("/donation.json"),
          element: <Home></Home>,
        },
        {
          path: "/donation",
          element: <Donation></Donation>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/details/:id",
          loader: ()=>fetch("/donation.json"),
          element: <DonationDetails></DonationDetails>
        },
      ]
    },
  ]);

export default Root;