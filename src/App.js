import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import Slider from "./components/Slider.js"
import {BrowserRouter as Router, Route} from "react-router-dom"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
function App() {
  return (
   <Router>
     <PreNavbar/>
     <Navbar/>
     <Slider start={data.banner.start} />
     <Offers offers={data.offer}/>
     <Heading text ="STAR PRODUCTS"/>
     <StarProduct StarProduct ={data.starProduct} />
     <Heading text ="HOT ACCESSORIES"/>
     <HotAccessoriesMenu/>
     <Heading text = "PRODUCT REVIEWS"/>
     <ProductReviews/>
     <Heading text = "VEDEOS"/>
     <Videos/>
     <Heading text = "IN THE PRESS"/>
     <Banner end = {data.banner.end}/>
     {/* <Footer/> */}
     </Router> 
  );
}

export default App;
