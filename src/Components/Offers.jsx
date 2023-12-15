import OfferCard from "./OfferCard";
const Offers = () => {
  const offerCategory = [
    "All Offers",
    "Bank Offers",
    "Flight",
    "Hotels",
    "Holidays",
    "Train Cabs",
  ];

  return (
    <section className="w-[95%] m-auto mt-16 mb-8 p-4 rounded-3xl bg-white shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="cursor-pointer text-black font-bold text-xl md:text-2xl lg:text-3xl block lg:flex">
          Offers
        </h2>
        <ul className="hidden lg:flex items-center lg:gap-8">
          {offerCategory.map((item, i) => (
            <li
              className="cursor-pointer text-gray-500 text-lg font-bold hover:text-red-800"
              key={i}
            >
              {item}
            </li>
          ))}
        </ul>
        <select className="cursor-pointer text-gray-500 font-bold focus:outline-red-900 lg:hidden">
        {offerCategory.map((item, i) => (
            <option
              className="text-gray-500 font-medium bg-white"
              key={i}
            >
              {item}
            </option>
          ))}
        </select>
        <h3 className="cursor-pointer pt-2 text-md md:text-lg lg:text-xl font-bold text-red-800">
          View All
        </h3>
      </div>
      <OfferCard />
    </section>
  );
};

export default Offers;
