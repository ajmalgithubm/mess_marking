import { AnimatePresence, motion } from 'framer-motion'
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
const Signup = React.lazy(() => import('./components/Signup/Signup'))
const Login =  React.lazy( () => import('./components/Login/Login'))
const Profile = React.lazy( () => import('./components/Profile/Profile'))
const Marking = React.lazy( () => import('./components/Marking/Marking'))
const NavBar = React.lazy( () => import('./components/NavBar/NavBar'))



function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<NavBar />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={
              <Suspense fallback ={<h1>Loading..</h1>}>
                <Profile/>
                <NavBar/>
              </Suspense>
            } />
            <Route path='/marking' element={
              <Suspense fallback={<h1>Loading..</h1>}>
                <Marking />
                <NavBar />
              </Suspense>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
