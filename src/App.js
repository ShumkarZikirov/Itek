import './App.scss';
import Header from "./components/home/header";
import React, {useState} from "react";
import MainPage from "./pages/main-page";
import Footer from "./components/home/footer";
import Modal from "./components/modal/modal";

function App() {
    const [modal,setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    return (
        <div className="App">
            <React.Fragment>
                <Header openModal={openModal}/>
            </React.Fragment>
            <MainPage/>
            <Modal modal={modal} closeModal={closeModal}/>
            <Footer/>
        </div>
    );
}

export default App;
