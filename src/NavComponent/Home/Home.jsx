import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ShowDonation from "./ShowDonation";

const Home = () => {
  const loaderDataAll = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[1200px] mx-auto my-5 lg:my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loaderDataAll.map((data) => (
          <ShowDonation key={data.id} getDonation={data}></ShowDonation>
        ))}
      </div>
    </div>
  );
};

export default Home;
