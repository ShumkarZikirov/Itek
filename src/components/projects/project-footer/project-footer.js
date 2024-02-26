import {Link} from "react-router-dom";
import * as Scroll from "react-scroll";
import './project-footer.scss'
import {BsArrowRight} from "react-icons/bs";

const ProjectFooter = () => {
    const scroll = Scroll.animateScroll;
    const scrollAbout = () => {
        scroll.scrollTo(0)
    }
    return (
        <div className={'project-footer'}>
            <Link to={'/about-us'} duration={500}><a onClick={scrollAbout}>О нас <span><BsArrowRight/></span></a></Link>
        </div>
    )
}
export default ProjectFooter