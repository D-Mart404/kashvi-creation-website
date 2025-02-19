import Navbar from "../component/Navbar"
import Card from "../component/CardSlider";
import Card2 from "../component/Card2";
import CardPage from "../component/CardPage";
import VideoCard2 from "../component/VideoCard2";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import ReviewsTestimonials from "../component/ReviewsTestimonials";
import OffersDiscounts from "../component/OffersDiscounts"

function Home() {

    return <div className="home">
       
        
        <Navbar/>
        <Hero/>
        <OffersDiscounts/>
        <Card/>
        <Card2/>
        <CardPage/>
        <VideoCard2/>
        <ReviewsTestimonials/>
        <Footer/>
        
    </div>
}

export default Home