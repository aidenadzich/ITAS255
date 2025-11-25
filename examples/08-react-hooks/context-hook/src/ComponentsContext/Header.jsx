import { useContext } from "react";
import { ProjectContext } from "../Components/CreateContext";
import UserInfo from "./UserInfo";

export default function Header() {
    const projectName = useContext(ProjectContext);

    return(

        <header>
            <h1>{ projectName }</h1>
            <UserInfo />
        </header>

    );
}