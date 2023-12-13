const MoreInfo = () => {
  const moreInfo = [
    {
    title: "PRODUCT OFFERING",
    description: "Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays in India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab",
  },
    {
    title: "MAKEMYTRIP",
    description: "About Us, Investor Relations, Careers, MMT Foundation, Legal Notices, CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo, Partners-BookMyForex, Advertise with Us, RedBus Ferry Malaysia, RedBus Ferry Singapore",
  },
    {
    title: "ABOUT THE SITE",
    description: "Customer Support, Payment Security, Privacy Policy, Cookie Policy, User Agreement, Terms of Service, More Offices, Make A Payment, Work From Home, Report Security Issues",
  },
    {
    title: "TOP HOTELS IN INDIA",
    description: "Fairmont Jaipur, St Regis Goa, Six Senses Fort Barwara, W Goa, Grand Hyatt Goa, Shangri-La Bangalore, The St Regis Mumbai, Taj Rishikesh, Grand Hyatt Mumbai, Le Meridien Delhi, Rambagh Palace Jaipur, Leela Palace Chennai, The Leela Palace Udaipur, Taj Lake Palace Udaipur, Jw Marriott Chandigarh, Alila Diwa Goa, Le Meridien Goa, Taj Lands End Mumbai Itc Grand Chola Chennal, Itc Maratha Mumbai, Oberoi Udaivilas, Jai Mahal Palace Jaipur, Taj Mahal Tower Mumbai, Marriott Suites Pune, Park Hyatt Chennai, The Leela Palace Jaipur, Jw Marriott Mumbai Sahar, Jw Marriott Mumbai Juhu, The Ritz Carlton Bengaluru, The Oberoi New Delhi, Taj Resort & Convention Centre Goa, Taj Bengal Kolkata, Taj Coromandel Chennai, The Oberoi Gurgaon, The Westin Goa, Jw Marriott Hotel Pune, The Leela Palace New Delhi, Taj West End Bengaluru, The Taj Mahal Palace Mumbai, Best Hotels in India",
  },
    {
    title: "TOP INTERNATIONAL HOTELS",
    description: "Adaaran Club Rannalhi, Marina Bay Sands Singapore, Coco Bodu Hithi, Taj Dubai, Atlantis Hotel Dubai, Amari Phuket, Jw Marriott Dubai, Armani Hotel Dubai, Grand Hyatt Dubai, Sail Lagoon Maldives, Gevora Hotel Dubai, Hyatt Regency Dubai, Pan Pacific Singapore, The Palm Dubai, Caesars Palace, Baiyoke Sky Hotel, Centara Pattaya Hotel, Embudu Village, Orchard Hotel Singapore, Reethi Beach Resort, Ambassador Hotel Bangkok, Dusit Thani Pattaya, Shangri La Singapore, Sunbeam Hotel Pattaya, Taj Samudra Colombo, Bangkok Palace Hotel, Hilton Pattaya, Novotel Phuket Resort, Taj Exotica Resort Maldives, Village Hotel Bugis, Avani Atrium Bangkok, The Plaza New York, Village Hotel Albert Court, Amari Pattaya",
  },
    {
    title: "QUICK LINKS",
    description: "Delhi Chennai Flights, Delhi Mumbai Flights, Delhi Goa Flights, Chennai Mumbai flights, Mumbai Hyderabad flights, Kolkata to Rupsi Flights, Rupsi to Guwahati Flights, Pasighat to Guwahati Flights, Delhi to Khajuraho Flights, Cochin to Agatti Island Flights, Hotels in Delhi, Hotels in Mumbai, Hotels In Goa, Hotels in Jaipur, Hotels in Ooty, Hotels in Udaipur, Hotels in Puri, Hotels in North Goa, Hotels in Rishikesh, Honeymoon Packages, Kerala Packages, Kashmir Packages, Ladakh Packages, Goa Packages, Thailand Packages, Sri Lanka Visa, Thailand Visa, Explore Goa, Explore Manali, Explore Shimla, Explore Jaipur. Explore Srinagar",
  },
    {
    title: "IMPORTANT LINKS",
    description: "Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines, International Airlines, Indigo, Spicejet, GoAir, Air Asia, Air India, Indian Railways, Trip Ideas, Beaches, Honeymoon Destinations, Romantic Destinations, Popular Destinations, Resorts in Udaipur, Resorts In Munnar, Villas In Lonavala, Hotels in Thailand, Villas in Goa, Domestic Flight Offers, International Flight Offers, UAE Flight Offers, USA, UAE, Saudi Arabia, UK, Oman",
  },
    {
    title: "CORPORATE TRAVEL",
    description: "Corporate Travel, Corporate Hotel Booking, Corporate Flight Booking, Business Travel for SME, GST Invoice for International flights, Business Travel Solutions, GST Invoice for Bus, Corporate Bus booking, myBiz - Best Business Travel Platform, GST Invoice for Flights, GST Invoice for Corporate Travel, GST Invoice for Hotels, myBiz for Small Business, Free cancellation on International Flights",
  },
]
  return (
    
    <section className="w-[95%] m-auto py-4">
{
  moreInfo.map((item, i) => (
    <div>
      <h2 className="my-4 text-xl md:text-2xl font-bold">{item?.title}</h2>
      <p className="text-gray-500 font-medium">{item?.description}</p>
    </div>
  ))
}
    </section>
  );
};

export default MoreInfo;
