const Planner = () => {
  const tripType = ["One Way", "Round Trip", "Multi City"];
  const tripRoute = [
    {
      title: "From",
      value: "Delhi",
      planInfo: "DEL, Delhi Airport India",
    },
    {
      title: "To",
      value: "Bengaluru",
      planInfo: "BLR, Bengaluru International Airport",
    },
  ];
  const tripInfo = [
    {
      title: "Departure",
      value: "11 Dec'23",
      planInfo: "Monday",
    },
    {
      title: "Return",
      value: "12 Dec'23",
      planInfo: "Tuesday",
    },
    {
      title: "Traveller & Class",
      value: "1 Traveller",
      planInfo: "Economy/Premium",
    },
  ];
  const fareType = [
    "Regular Fares",
    "Armed Forces Fares",
    "Student Fares",
    "Senior Citizen Fares",
    "Doctors & Nurse Fares",
  ];

  return (
    <section className="w-[95%] relative m-auto -mt-48 md:-mt-28 rounded-3xl bg-white shadow-md">
      <div className="w-[80%] lg:w-[40%] m-auto mb-4 px-4 py-6 rounded-2xl bg-white shadow-md absolute -mt-8 left-10 sm:left-16 md:left-20 lg:absolute lg:-mt-10 lg:left-1/3">
        <div className="flex justify-between items-center ">
          {tripType.map((item, index) => (
            <div className="flex items-center">
              <label
                key={index}
                className="text-gray-700 text-xs sm:text-sm md:text-lg font-medium cursor-pointer"
              >
                <input
                  className="mr-2 cursor-pointer"
                  type="radio"
                  name="plan-type"
                  value={item}
                />
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[95%] m-auto p-6 pt-16 lg:flex gap-24 lg:pt-16">
        <div className="w-full bg-gray-100 rounded-xl flex justify-between flex-wrap">
          <div className="flex justify-center sm:justify-between items-center flex-wrap sm:flex-nowrap md:w-[90%] md:m-auto xl:w-[50%] text-center xl:text-left">
            {tripRoute.map((item, i) => (
              <div
                key={i}
                className="hover:bg-red-100 cursor-pointer mx-6 md:mx-auto p-4 rounded-lg"
              >
                <p className="text-gray-500 font-medium lg:text-lg">
                  {item?.title}
                </p>
                <h2 className="text-black font-semibold text-2xl lg:text-4xl my-2">
                  {item?.value}
                </h2>
                <p className="text-gray-500 font-medium lg:text-lg">
                  {item?.planInfo}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center sm:justify-between items-center flex-wrap sm:flex-nowrap md:w-[90%] md:m-auto xl:w-[50%] text-center xl:text-left">
            {tripInfo.map((item, i) => (
              <div
                key={i}
                className="hover:bg-red-100 cursor-pointer p-4  rounded-lg"
              >
                <p className="text-gray-500 font-medium lg:text-lg">
                  {item?.title} <span className="text-red-900">↓</span>
                </p>
                <h2 className="text-black font-semibold text-2xl lg:text-4xl my-2">
                  {item?.value}
                </h2>
                <p className="text-gray-500 font-medium lg:text-lg">
                  {item?.planInfo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[95%] p-6 m-auto lg:flex justify-between items-start">
        <h2 className="lg:inline-block text-black font-bold text-lg">
          Select a Fare Type
        </h2>
        <div className="w-fit m-auto lg:flex flex-wrap gap-4">
          {fareType.map((item, index) => (
            <div className="block text-left">
              <label className="text-gray-500 font-medium text-lg cursor-pointer">
                <input
                  type="radio"
                  name="fare-type"
                  className="mr-2 cursor-pointer"
                />
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="m-auto  flex items-center justify-center">
        <button className="-mb-6 px-12 py-2 shadow-md bg-gradient-to-r from-red-800 to-red-900 text-white text-xl rounded-lg">
          Search
        </button>
      </div>
    </section>
  );
};

export default Planner;
