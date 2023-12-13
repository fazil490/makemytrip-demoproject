import COLLECTION_IMG from "../assets/collection-image - Copy.png";

const Wonders = () => {
  const wondersDetails = [
    {
      description: "Stay in and around Delhi for a weekend",
    },
    {
      description: "Stay in and around Delhi for a weekend",
    },
    {
      description: "Stay in and around Delhi for a weekend",
    },
    {
      description: "Stay in and around Delhi for a weekend",
    },
    {
      description: "Stay in and around Delhi for a weekend",
    },
    {
      description: "Stay in and around Delhi for a weekend",
    },
    {
      description: "Stay in and around Delhi for a weekend",
    },
  ];
  return (
    <section className="w-[95%] m-auto rounded-3xl bg-white shadow-lg p-4 mb-4">
      <div className="flex justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="cursor-pointer w-[75%] text-black font-bold text-xl md:text-2xl lg:text-3xl block lg:flex">
          Unlock Lesser Known Wonders of India
        </h2>
        <p className="cursor-pointer pt-1 text-md md:text-lg lg:text-xl  font-bold text-red-800">
          View all
        </p>
      </div>
      <div className="flex overflow-x-scroll scrollbar-hide gap-4">
        {wondersDetails.map((item, i) => (
          <div className="flex-shrink-0 relative cursor-pointer" key={i}>
            <img
              className="rounded-2xl w-[300px] h-[200px]"
              src={COLLECTION_IMG}
              alt=""
            />
            <div className="absolute top-32 px-4">
              <p className="text-white font-semibold text-lg">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wonders;
