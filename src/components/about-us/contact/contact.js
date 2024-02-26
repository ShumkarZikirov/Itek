import './contact.scss'
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import * as Scroll from "react-scroll";

const Contact = () => {
    const scroll = Scroll.animateScroll;
    const scrollHome = () => {
        scroll.scrollTo(0)
    }
    return (
        <div className={'contact'}>
            <div className={'contact-main'}>
                <h3>Наш адрес</h3>
                <div>
                    <h4>Ош</h4>
                    <p>Насиридин Исанова, 52/1</p>
                </div>
                <div>
                    <p>+996555555555</p>
                    <p>itek.kg@gmail.com</p>
                </div>
            </div>
            <div>
                <Link to={'/'} duration={500}>
                    <a href={"#"} onClick={scrollHome}>Главная <span><BsArrowRight/></span></a>
                </Link>
            </div>
        </div>
    )
}
export default Contact