import React from "react";
import OFFER_CARD_IMG from "../assets/OFFER_CARD_IMG - Copy.png";

const OfferCard = () => {
  const offers = [
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
  ];

  return (
    <div className="mt-10 flex overflow-x-auto scrollbar-hide gap-4">
      {offers.map((item, i) => (
        <div className="shadow-lg rounded-lg p-2 w-[500px] mx-auto flex gap-4 cursor-pointer flex-shrink-0 mb-4">
          <div>
            <img className="w-[150px] h-[100%]" src={OFFER_CARD_IMG} alt="" />
          </div>
          <div className="py-1 relative">
            <h4 className="text-gray-500 font-medium text-sm">
              {item?.offerType}
            </h4>
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl">{item?.title}</h3>
            <h4 className="text-gray-500 font-medium text-sm">
              {item?.offerDetails}
            </h4>
            <button className=" right-4 mt-4 bg-gradient-to-r from-red-900 to-red-950 text-white py-2 px-4 rounded-full shadow-md">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferCard;
