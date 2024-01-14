import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setDonationToLocalStorage } from "../../Utility/LocalStorage";

const DonationDetails = () => {
  const [match, setMatch] = useState([]);

  const loaderData = useLoaderData();
  const getId = useParams();
  const idParams = getId.id;
  useEffect(() => {
    if (idParams.length > 0) {
      const bothMatch = loaderData.find((loadData) => loadData.id === idParams);
      setMatch(bothMatch);
    }
  }, [loaderData, idParams]);

  const setIdToLocalStorage = (id, price) => {
    setDonationToLocalStorage(parseInt(id), price);
  };

  const { id, image, price, title, description, text_color } = match;
  return (
    <div className="max-w-[1230px] mx-auto my-10">
      <div>
        <div className="relative px-3 md:px-0">
          <img alt="" className="w-full lg:w-[60%] rounded-md" src={image} />
          <div className="w-[60%] h-[87px] bg-[#0b0b0b80] absolute bottom-0">
            <button
              onClick={() => setIdToLocalStorage(id, price)}
              style={{ backgroundColor: text_color }}
              className="text-white p-3 rounded-lg m-5"
            >
              Donate ${price}
            </button>
          </div>
        </div>
      </div>
      <div className="md:mt-4 p-4 md:p-0">
        <h1 className="text-2xl mb-3 font-bold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;