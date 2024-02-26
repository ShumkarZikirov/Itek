import AboutHeader from "../../components/about-us/about-header";
import Douing from "../../components/about-us/doing";
import Contact from "../../components/about-us/contact";

const AboutUsPage = () => {
    return (
        <div className={'aboutUsPage'}>
            <AboutHeader/>
            <Douing/>
            <Contact/>
        </div>
    )
}
export default AboutUsPage