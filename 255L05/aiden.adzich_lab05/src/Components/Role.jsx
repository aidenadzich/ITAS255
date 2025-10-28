import PropTypes from 'prop-types'
import userList from '../data/users.json'
import User from './User'

Role.propTypes = {
    role: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        role: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
}

export default function Role({role}) {
    const users = userList

    return (
        <>
            <div className="grid grid-cols-2 items-center gap-4 p-4 bg-gray-300 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="text-gray-800">{role.role}</h3>
                <h3 className="text-gray-600">{role.description}</h3>
            </div>

            {users.sort((a,b) => a.last_name.localeCompare(b.last_name)).map((user, i) => (
                user.role === role.id ? <User key={i} user={user} /> : null
            ))}
        </>
        
    )
}