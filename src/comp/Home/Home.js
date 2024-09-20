import "./Home.css";
import TopBanner from "./TopBanner";
import Trending from "./Trending";
import OurText from "./OurText";
import Banner from "./Banner";
import Reviews from "./Reviews";
import ProductCategory from "./ProductCategory";
import Footer from "../Footer/Footer";

export default function Home({addlocart}) {
  return (
    <div className="relative home w-full">
   <TopBanner/>
    <Trending addlocart={addlocart}/>
     <OurText/>
     <Banner/>
     <ProductCategory addlocart={addlocart}/>
     <Reviews/>
     <Footer/>
      {/**home */}
    </div>
  );
}
