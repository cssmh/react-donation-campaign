import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DonationCard from "./Card";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [displayDonation, setDisplayDonation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (searchValue === "") {
      setDisplayDonation(loaderDataAll);
      toast("Input something!");
    } else {
      const searchItem = loaderDataAll.filter((singleData) =>
        singleData.category.toLowerCase().includes(searchValue.toLowerCase())
      );
      setDisplayDonation(searchItem);
      if (!searchItem) {
        setDisplayDonation([]);
      }
    }
  };

  const loaderDataAll = useLoaderData();
  useEffect(() => {
    setDisplayDonation(loaderDataAll);
  }, [loaderDataAll]);
  return (
    <div>
      <div
        className="hero min-h-[55vh]"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/cssmh/react-donation-campaign/main/public/photos/banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-95 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-8 text-2xl md:text-4xl font-bold text-[#0B0B0B]">
              I Grow By Helping People In Need
            </h1>
            <div className="text-gray-600">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search here...."
                  className="input input-bordered w-full max-w-xs"
                />
                <button className="btn bg-[#FF444A] px-7 text-white">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {displayDonation.length == 0 ? (
        <p className="my-7 text-center text-red-500 text-xl">No match found!</p>
      ) : (
        <div className="max-w-[1200px] mx-auto my-5 lg:my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayDonation.map((data) => (
            <DonationCard key={data.id} getDonation={data}></DonationCard>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Home;
