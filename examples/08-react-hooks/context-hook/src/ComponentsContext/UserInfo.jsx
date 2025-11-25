import { useContext } from "react";
import { UserContext, ProjectContext } from "../Components/CreateContext";

export default function UserInfo() {

    const { firstName, lastName } = useContext(UserContext);
    const projectName = useContext(ProjectContext);

   return (
        <>
            <span>{ firstName } { lastName }</span><br/>
            <span>{projectName}</span>
        </>
    )
}