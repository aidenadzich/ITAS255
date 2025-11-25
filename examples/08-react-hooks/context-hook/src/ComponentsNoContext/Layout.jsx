import Header from './Header';
import { PropTypes } from 'prop-types';

Layout.propTypes = {
    children: PropTypes.string.isrequired,
    username: PropTypes.string.isrequired,
}

export default function Layout( {children , username}) {
    return ( 
        <div>
            <Header username={username} />
            <main>
                These are {children}
            </main>
        </div>
    )
}