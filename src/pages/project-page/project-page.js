import './project-page.scss'
import ProjectHeader from "../../components/projects/project-header";
import ProjectMain from "../../components/projects/project-main";
import ProjectFooter from "../../components/projects/project-footer";

const ProjectPage = () => {
    return (
        <div className={'project-page'}>
            <ProjectHeader/>
            <ProjectMain/>
            <ProjectFooter/>
        </div>
    )
}
export default ProjectPage