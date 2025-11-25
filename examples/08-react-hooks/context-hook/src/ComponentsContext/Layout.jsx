import Header from './Header';
import { ProjectContext } from '../Components/CreateContext';
import { PropTypes } from "prop-types";

Layout.PropTypes = {
    children: PropTypes.string.isRequired,
}

export default function Layout({ children }) {
    return ( 
        <ProjectContext.Provider value="My Awesome Project">
            <div>
                <Header />
                <main>{children}</main>
            </div>
        </ProjectContext.Provider>
    )
}