import './footer.scss'
import { useLocation } from 'react-router-dom';
const Footer = () => {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <div style={{backgroundColor:location.pathname === '/'?'black':location.pathname === '/projects'?'#0089FF':location.pathname === '/about-us'?'#0b24f9':'black' }} className={'footer'}>
            <div className='footer-main'>
                <div className={'footer-tittle'}>
                    <h2><span className={'none'}>ITek</span><span className={'itek'}>ITek</span><span>ITek</span></h2>
                </div>
                <div className={'footer-link'}>
                    <p>itek.kg@gmail.com</p>
                    <div>
                        <a href={'https://www.instagram.com/itek.kg/'}>Инстаграмм</a>
                        <a>Фейсбук</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer