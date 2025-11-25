import '../assets/App.css';
import Layout from './Layout';

function App() {
  const username = "Allan McDonald";
  const things = 'My Children';

  return (
    <div className="App">
      <Layout username={username}>
        {things}<br /><br />
        Main Content
      </Layout>
    </div>
  );
}

export default App;