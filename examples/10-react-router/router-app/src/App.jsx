import { Routes, Route } from 'react-router-dom';
import "./assets/App.css";
import About from './Components/About';
import Home from './Components/Home'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Programs from './Components/Programs';
import Program from './Components/Program';
import Course from './Components/Course';
import Register from './Components/Register';
import Confirmation from './Components/Confirmation';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home title="Welcome to VIU" />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} > 
          <Route path=":progId" element={<Program />}>
            <Route path=":courseId" element={<Course />}/>
            <Route index element={<h4>Select a course to see details</h4>} />
          </Route>
          <Route index element={<h4>Select a program to see courses</h4>} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='confirmed' element={<Confirmation />} />
        <Route path='*' element={<h1 className='not-found'>Page Not Found</h1>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
