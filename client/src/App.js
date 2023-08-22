import { AnimatePresence, motion } from 'framer-motion'
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
const Loading = React.lazy(() => import('./components/Loading/Loading'))
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
            <Route path='/' element={
              <Suspense fallback={<Loading/>}>
                <NavBar />
              </Suspense>
            } />
            <Route path='/login' element={
              <Suspense fallback={<Loading/>}>
                <Login />
              </Suspense>
            } />
            <Route path='/signup' element={
              <Suspense fallback={<Loading/>}>
                <Signup />
              </Suspense>
            } />
            <Route path='/profile' element={
              <Suspense fallback ={<Loading/>}>
                <Profile/>
                <NavBar/>
              </Suspense>
            } />
            <Route path='/marking' element={
              <Suspense fallback={<Loading/>}>
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
