import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [matching, setMatching] = useState([]);

  const getallDataFromLoader = useLoaderData();
  useEffect(() => {
    const getLocalIds = getLocalStorage();
    if (getLocalIds.length > 0) {
      const bothMatching = getallDataFromLoader.filter((allIds) =>
        getLocalIds.includes(parseInt(allIds.id))
      );
      setMatching(bothMatching);
    }
  }, [getallDataFromLoader]);
  return (
    <div className="my-12 max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      {matching.map((singleCard) => (
        <DonationCard
          key={singleCard.id}
          getCardDetails={singleCard}
        ></DonationCard>
      ))}
    </div>
  );
};

export default Donation;
