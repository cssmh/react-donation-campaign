import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [displayCard, setDisplayCard] = useState(4);
  const [matching, setMatching] = useState([]);
  const [btnShow, setBtnShow] = useState(true);

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

  const handleSeeAllButton = () => {
    setBtnShow(!btnShow)
    setDisplayCard(matching.length)
  }

  return (
    <div>
      <div className="mt-12 mb-5 max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {matching.slice(0, displayCard).map((singleCard) => (
          <DonationCard
            key={singleCard.id}
            getCardDetails={singleCard}
          ></DonationCard>
        ))}
      </div>
      <div className={`flex justify-center ${matching.length <= 4 && "hidden"}`}>
        <button onClick={handleSeeAllButton} className={`mb-5 bg-green-700 text-white px-3 py-1 rounded-md ${btnShow ? "block" : "hidden"}`}>
          Show all
        </button>
      </div>
    </div>
  );
};

export default Donation;
