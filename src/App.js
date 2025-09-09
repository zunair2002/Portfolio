import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/aboutme' element={<Aboutme />}></Route>
      <Route path='/skills' element={<Skills />}></Route>
      <Route path='/project' element={<Project />}></Route>
      <Route path='/contactme' element={<Contact />}></Route>
    </Routes>
    </>
  );
}

export default App;
