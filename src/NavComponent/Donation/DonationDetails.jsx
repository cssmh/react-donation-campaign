import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const [match, setMatch] = useState([]);

  const loaderData = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    if (id.length > 0) {
      const bothMatch = loaderData.find((loadData) => loadData.id === id);
      setMatch(bothMatch);
    }
  }, [loaderData, id]);

  const { image, price, title, description, text_color } = match;
  return (
    <div className="max-w-[1230px] mx-auto my-10">
      <div>
        <div className="relative">
          <img alt="" className="w-[60%] rounded-md" src={image} />
          <div className="w-[60%] h-[87px] bg-[#0b0b0b80] absolute bottom-0">
            <button
              style={{ backgroundColor: text_color }}
              className="text-white p-3 rounded-lg m-5"
            >
              Donate ${price}
            </button>
          </div>
        </div>
      </div>
      <div className="md:mt-4 p-5 md:p-0">
        <h1 className="text-2xl mb-3 font-bold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;

{
  /* <div className="max-w-[1230px] mx-auto my-10">
      <div>
        <img className="p-3 md:p-0 w-full md:w-[50%] rounded-b-xl" src={image} alt="" />
      </div>
      <div className="md:mt-4 p-5 md:p-0">
        <h1 className="text-2xl mb-3 font-bold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div> */
}
