import { PropTypes } from 'prop-types';

UserInfo.propTypes = {
    username: PropTypes.string.isrequired,
}

export default function UserInfo({ username }) {
    return <span>{username}</span>
}