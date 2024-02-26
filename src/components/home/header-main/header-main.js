import './header-main.scss'

const HeaderMain = () => {
    return (
        <div className={'headerMain'}>

            <div className={'headerMain-main'}>
                <p className={'headerMain-main_p'}><span className={'color'}>itek.</span> — мы творческая <span
                    className={'italik'}>КРЕАТИВНАЯ</span>
                    команда, которая создает уникальные
                    решения для различных сфер деятельности</p>
                <div className="background">
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                </div>
            </div>
        </div>
    )
}
export default HeaderMain