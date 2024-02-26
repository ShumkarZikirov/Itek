import './services-home.scss'
import desingVideo from '../../../assets/video/desing.mp4'
import codeVideo from '../../../assets/video/code.mp4'
import peopleVideo from '../../../assets/video/peoples.mp4'
import calendar from '../../../assets/video/kalendar.mp4'

const ServicesHome = () => {
    return (
        <div className={'ServicesHome'}>
            <div>
                <video width={'100%'} autoPlay muted loop>
                    <source src={desingVideo} type={"video/mp4"}/>
                </video>
                <p>Креативность</p>
            </div>
            <div>
                <video width={'100%'} autoPlay muted loop>
                    <source src={codeVideo} type={"video/mp4"}/>
                </video>
                <p>Качественно</p>
            </div>
            <div>
                <video width={'100%'} autoPlay muted loop>
                    <source src={peopleVideo} type={"video/mp4"}/>
                </video>
                <p>Специализированный</p>
            </div>
            <div>
                <video width={'100%'} autoPlay muted loop>
                    <source src={calendar} type={"video/mp4"}/>
                </video>
                <p>Эффективно</p>
            </div>
        </div>
    )
}
export default ServicesHome