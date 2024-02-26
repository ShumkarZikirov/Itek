import './services-footer.scss'
import {BsArrowRight} from "react-icons/bs";
import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';

const ServicesFooter = () => {
    const scroll = Scroll.animateScroll;
    const scrollServices = () => {
        scroll.scrollTo(800)
    }
    return (
        <div className={'servicesFooter'}>
            <h3 className={'servicesFooter-h3'}>Наши услуги</h3>
            <ul className={'servicesFooter-ul'}>
                <li>Веб-услуги</li>
                <li>Мобильные приложения</li>
                <li>Дизайн</li>
                <li>Программное обеспечение</li>
                <li>Цифровой маркетинг</li>
                <li>Рекламные услуги</li>
                <li>СММ</li>
                <li>. . .</li>
            </ul>
            <Link to={'/about-us'} duration={500}> <a href={'#'} className='servicesFooter-button'
                                                      onClick={scrollServices}>Услуги <span><BsArrowRight/></span></a></Link>
        </div>
    )
}
export default ServicesFooter