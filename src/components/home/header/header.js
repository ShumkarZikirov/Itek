import {Link} from 'react-router-dom';
import React, {useRef} from "react";
import {BsJustifyRight, BsX} from "react-icons/bs";
import * as Scroll from 'react-scroll';
import './header.scss'

const Header = ({openModal}) => {
    const scroll = Scroll.animateScroll;
    const scrollServices = () => {
        scroll.scrollTo(800)
    }
    const scrollContact = () => {
        scroll.scrollTo(2400)
    }
    const navRef = useRef();
    const showNavbar = (e) => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <div className={'header'}>
            <div className={'header-main'}>
                <div className={'header-main_logo'}>
                    <Link to={'/'}>itek.</Link>
                </div>
                <nav ref={navRef} onClick={showNavbar} className={'header-main-nav'}>
                    <Link to='/'>Главная</Link>
                    <Link to='/projects'>Проекты</Link>
                    <Link to='/about-us'>О нас</Link>
                    <Link to='/about-us' duration={500}><a onClick={scrollServices}>Услуги</a></Link>
                    <Link to='/about-us' duration={500}><a onClick={scrollContact}>Контакты</a></Link>
                    <div className={'header-main-contact'}>
                        <button onClick={openModal}>
                            <svg width="160px" height="40px" viewBox="0 0 160 40" className="border">
                                <polyline points="279,2 279,59 1,59 1,1 279,2" className="bg-line"/>
                                <polyline points="279,2 279,59 1,59 1,1 279,2" className="hl-line"/>
                            </svg>
                            <span>Оставить заявку</span>
                        </button>
                    </div>
                    <h5 className={'itek'}>itek.</h5>
                    <button className={'nav-btn btn_close nav-close-btn'}><BsX/></button>
                </nav>
                <button onClick={showNavbar} className={'nav-btn nav-close-btn'}><BsJustifyRight/></button>
            </div>
        </div>
    )
}
export default Header