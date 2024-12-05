import BlogSection from "../components/BlogSection";
import CountdownTimer from "../components/CountdownTimer";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Slider from "../components/Slider";
import TestimonialCarousel from "../components/TestimonialCarousel";



const Home = () => {

    return (
        <div >
            
            <div className="w-11/12 md:w-9/12 mx-auto mt-2 space-y-5 mb-5">
            <Slider></Slider>
            </div>
            <CountdownTimer></CountdownTimer>
            <div className="w-11/12 md:w-9/12 mx-auto mt-2 space-y-5">
            <Products></Products>
            </div>
            <TestimonialCarousel></TestimonialCarousel>
            <div className="w-11/12 md:w-9/12 mx-auto mt-2 space-y-5">
            <BlogSection></BlogSection>
            </div>
            <Footer></Footer>
            
            


        </div>
    );
};

export default Home;