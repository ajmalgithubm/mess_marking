import { AnimatePresence, motion } from 'framer-motion'
import NavBar from './components/NavBar/NavBar';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Marking from './components/Marking/Marking';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <div className="App">
         <Routes>
          <Route path='/' element={<NavBar/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/marking' element={<Marking/>}/>
         </Routes>
        </div>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
