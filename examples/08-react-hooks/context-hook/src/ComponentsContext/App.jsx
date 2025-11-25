import { useEffect, useState } from 'react';
import { UserContext } from '../Components/CreateContext';
import Layout from './Layout';

import '../assets/App.css';

function App() {

  const [username, setUserName] = useState({
    firstName: 'Aiden',
    lastName: 'Adzich'
  });

  useEffect(() => {
    setTimeout(() => {
      setUserName({ firstName: 'Lily', lastName: 'Wilson'});
    }, 5000);
  }, []);

  return (
    <UserContext.Provider value={username}>
      <div className="App">
        <Layout>
          Main Content From App Component
        </Layout>
      </div>
    </UserContext.Provider>
  );
}

export default App;