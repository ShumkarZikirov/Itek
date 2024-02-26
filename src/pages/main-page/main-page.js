import {Route, Routes} from "react-router-dom";
import HomePage from "../home-page";
import AboutUsPage from "../about-us-page";
import ProjectPage from "../project-page";

const MainPage = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/projects" element={<ProjectPage/>}/>
            <Route path='/about-us' element={<AboutUsPage/>}/>
        </Routes>
    )
}
export default MainPage