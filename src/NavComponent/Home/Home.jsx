const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-[60vh]"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/cssmh/react-donation-campaign/main/public/photos/banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-95 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-8 text-2xl md:text-4xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search here...."
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn bg-[#FF444A] px-7 text-white">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
