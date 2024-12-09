import About from "../../components/home/about/About";
import HeroBanner from "../../components/home/heroBanner/HeroBanner";
import How_work from "../../components/home/how_work/How_work";
import Masters from "../../components/home/masters/Masters";
import Services from "../../components/home/services/Services";
import Testimonials from "../../components/home/testimonials/Testimonials";

const HomePage = () => {
    return (
        <>
            <HeroBanner />
            <About/>
            {/* <How_work/>
            <Services/>
            <Masters/>
            <Testimonials/> */}
        </>
    );
};

export default HomePage;