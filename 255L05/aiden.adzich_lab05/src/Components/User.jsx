import PropTypes from 'prop-types'

User.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        role: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })).isRequired
}

export default function User({user}) {
    return (
        <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-gray-800">{user.email}</h3>
            <h3 className="text-gray-600">{user.last_name}, {user.first_name}</h3>
        </div>
    )
}