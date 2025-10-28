import './assets/App.css'
import rolesList from './data/roles.json'
import Role from './Components/Role'

function App() {
  const roles = rolesList;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Aiden's Roles</h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-indigo-600 p-4 grid grid-cols-2 gap-4">
            <h3 className="font-semibold text-lg text-white">Role</h3>
            <h3 className="font-semibold text-lg text-white">Description</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {roles.map((role, i) => <Role key={i} role={role} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
