import Header from "../Components/Header"
import Planner from "../Components/Planner"
import Offers from "../Components/Offers"
import Collections from "../Components/Collections"
import MoreInfo from "../Components/MoreInfo"
import About from "../Components/About"
import Footer from "../Components/Footer"
import Wonders from "../Components/Wonders"

const Home = () => {
  return (
    <div className="bg-gray-50">
    <Header />
    <Planner />
    <Offers />
    <Collections/>
    <Wonders/>
    <MoreInfo />
    <About />
    <Footer />
    </div>
  )
}

export default Home