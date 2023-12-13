const About = () => {
  const about = [
    {
      title: "Why MakeMyTrip?",
      description:
        "Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers' evolving needs and demands.",
    },
    {
      title: "Booking Flights with MakeMyTrip",
      description:
        "At MakeMyTrip, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India's leading website for hotel, flight, and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer's queries and concerns. Serving over 5 million happy customers, we at MakeMyTrip are glad to fulfill the dreams of folks who need a quick and easy means to find air tickets. You can get a hold of the cheapest flight of your choice today while also enjoying the other available options for your travel needs with us.",
    },
    {
      title: "Domestic Flights with MakeMyTrip",
      description:
        "MakeMyTrip is India's leading player for flight bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features.",
    },
  ];
  return (
    <section className="bg-gray-100">
      <div className="w-[95%] m-auto py-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">{
        about.map((item, i) => (
          <div>
            <h2 className="my-4 text-xl font-bold">{item?.title}</h2>
            <p className="text-gray-500 font-medium">{item?.description}</p>
          </div>
        ))
      }</div>
    </section>
  );
};

export default About;
