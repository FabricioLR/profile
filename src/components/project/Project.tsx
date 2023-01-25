import { ProjectType } from "../../types/types"
import style from "./project.module.css"
import { AiFillGithub} from "react-icons/ai"
import { BiLinkExternal } from "react-icons/bi"

type ProjectProps = {
    project: ProjectType
}

function Project(props: ProjectProps){
    return(
        <div className={style.project}>
            <div className={style.header}>
                <div className={style.title}>
                    <p>{props.project.title}</p>
                </div>
                <div>
                    <AiFillGithub className={style.github} size={22} onClick={() => window.location.href = props.project.linkGF}/>
                    {
                        props.project.linkS != undefined ?
                            <BiLinkExternal className={style.externalLink} size={22} onClick={() => window.location.href = String(props.project.linkS)}/>
                        :
                            null
                    }
                </div>
            </div>
            <div className={style.description}>
                <p>{props.project.description}</p>
            </div>
            <div className={style.resources}>
                <ul>
                    {props.project.resources.map(resource => <li><span>{resource}</span></li>)}
                </ul>
            </div>
            {
                props.project.linkGB != undefined ?
                    <div className={style.backEndDescripttion}>
                        <p><a href={props.project.linkGB}>Back End</a>: {props.project.backEndDescription}</p>
                    </div>
                :
                    null
            }
            <div className={style.tecnologies}>
                {
                    props.project.tecnologies.map(tecnology => {
                        const Icon = tecnology
                        return (
                            <Icon size={25} className={style.tecnology}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Project