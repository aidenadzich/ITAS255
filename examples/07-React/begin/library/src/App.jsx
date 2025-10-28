import './assets/App.css'
import Booklist from './data/booklist.json'
import Library from './Components/Library'

function App() {


  return (
    <>
      <Library books={ Booklist }/>
    </>
  )
}

export default App
