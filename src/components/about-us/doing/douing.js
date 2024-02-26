import './doing.scss'
import codeVideo from "../../../assets/video/code.mp4";
import web from '../../../assets/video/web-services.mp4'
import app from '../../../assets/video/mobile-app.mp4'
import desing from '../../../assets/video/desing.mp4'
import marketing from '../../../assets/video/marketing.mp4'
import smm from '../../../assets/video/smm.mp4'
import reklama from '../../../assets/video/reklama.mp4'

const Douing = () => {
    return (
        <div className={'Douing'}>
            <div className={'Douing-main'}>
                <h3 className={'Douing-main-h3'}>Наши услуги</h3>
                <div className={'Douing-main-blocks'}>
                    <div>
                        <h3>Веб-услуги</h3>
                        <div>
                            <video width={'100%'} autoPlay muted loop>
                                <source src={web} type={"video/mp4"}/>
                            </video>
                        </div>
                        <p>
                            Дизайнерские сайты
                            Корпоративные сайты
                            Интернет-магазины
                        </p>
                    </div>
                    <div>
                        <h3>Мобильное приложение</h3>
                        <div>
                            <video width={'100%'} autoPlay muted loop>
                                <source src={app} type={"video/mp4"}/>
                            </video>
                        </div>
                        <p>iOS приложения
                            Android приложения</p>
                    </div>
                    <div>
                        <h3>Дизайн</h3>
                        <div>
                            <video width={'100%'} autoPlay muted loop>
                                <source src={desing} type={"video/mp4"}/>
                            </video>
                        </div>
                        <p>Разработка логотипа
                            Создание фирменного стиля
                            Разработка печатной продукции
                            Визуальная айдентика
                            Разработка принтов</p>
                    </div>
                    <div>
                        <h3>Программное обеспечение</h3>
                        <div>
                            <video width={'100%'} autoPlay muted loop>
                                <source src={codeVideo} type={"video/mp4"}/>
                            </video>
                        </div>
                        <p>Программное обеспечение управляет аппаратной частью ПК, которая производит физические
                            операции. Удобство и универсальность ПО заключается в его способности модифицироваться.
                            Программа, способная запоминать информацию, сделала вычислительные машины гибкими и легко
                            адаптируемыми к разным условиям работы.</p>
                    </div>
                    <div>
                        <h3>Цифровой маркетинг</h3>
                        <div>
                            <video width={'100%'} autoPlay muted loop>
                                <source src={marketing} type={"video/mp4"}/>
                            </video>
                        </div>
                        <p>Сегодня digital-маркетинг не только собирает точную и объективную информацию о целевой
                            аудитории, но и прослеживает результаты продвижения бренда или продукта.</p>
                    </div>
                    <div>
                        <h3>Рекламные услуги</h3>
                        <div>
                            <video width={'100%'} autoPlay muted loop>
                                <source src={reklama} type={"video/mp4"}/>
                            </video>
                        </div>
                        <p>Вы получите правильно настроенную рекламную кампанию для вашего бизнеса. Все заботы о
                            маркировке рекламы и передаче отчётности сервис берёт на себя.</p>
                    </div>
                    <div>
                        <h3>СММ</h3>
                        <div>
                            <video width={'100%'} autoPlay muted loop>
                                <source src={smm} type={"video/mp4"}/>
                            </video>
                        </div>
                        <p>SMM — маркетинг, целью которого является привлечение, удержание клиентов и продажи в
                            социальных сетях.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Douing