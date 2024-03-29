// please install npm install react-apexcharts
import React from "react";
import Chart from "react-apexcharts";
import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../Utility/LocalStorage";
function Statistics() {
  const loadData = useLoaderData();
  const allLength = loadData.length;
  const localData = getLocalStorage();
  const donationLength = localData.length;

  function calculatePercentage(part, whole) {
    return (part / whole) * 100;
  }
  const donationPercentage = calculatePercentage(donationLength, allLength);
  const totalDonation = 100 - donationPercentage;

  return (
    <React.Fragment>
      <div className="container-fluid mt-14">
        <Chart
          type="pie"
          width="84%"
          height={380}
          series={[donationPercentage, totalDonation]}
          options={{
            labels: ["Your Donation", "Total Donation"],
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default Statistics;
