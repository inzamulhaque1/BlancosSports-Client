import Products from "../components/Products";
import Slider from "../components/Slider";



const Home = () => {

    return (
        <div className="w-11/12 md:w-9/12 mx-auto mt-2 space-y-5">
            <Slider></Slider>
            <Products></Products>


        </div>
    );
};

export default Home;