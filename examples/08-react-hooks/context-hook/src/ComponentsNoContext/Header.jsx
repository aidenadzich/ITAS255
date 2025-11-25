import UserInfo from './UserInfo';
import PropTypes from 'prop-types';

Header.propTypes = {
    username: PropTypes.string.isRequired,
};

export default function Header({ username }) {
    return (
        <header>
            <UserInfo username={username} />
        </header>
    )
}