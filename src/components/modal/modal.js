import './modal.scss'
import { FaTimes } from 'react-icons/fa';
import icon from '../../assets/video/icon.mp4'
import {useState} from "react";
import {request} from "../../services/services";

const Modal = ({closeModal,modal}) => {
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const onOrder = async (e) =>{
        e.preventDefault()
        setNumber('')
        setName('')
        await request({name: name, number: number})
            .then(res => res)
    }
    return(
        <div onClick={closeModal} className={modal?'modal-tell active':'modal-tell'}>
            <div className={'modal-main'}>
                <div onClick={e => e.stopPropagation()} className={'modal-content'}>
                    <button onClick={closeModal} id={'close-modal'}><FaTimes/></button>
                    <h5>Оставить заявку</h5>
                    <div className={'video-icon'}>
                        <video width={'100%'} autoPlay muted loop>
                            <source src={icon} type={"video/mp4"}/>
                        </video>
                    </div>
                    <form onSubmit={onOrder}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={'Ваше имя'}/>
                        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder={'Ваш номер телефона'}/>
                        <button type={'submit'}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Modal