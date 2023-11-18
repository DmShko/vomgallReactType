import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
import React from 'react'

// import component pages
import SharedLayout from './components/SharedLayout/SharedLayout'
import Gallery from './components/Gallery/Gallery';
import NotFound from './components/NotFound/NotFound';
import SingUp from './components/SingUp/SingUp';
import LogIn from './components/LogIn/LogIn';
import ModalArt from 'components/ModalArt/ModalArt';
import Home from 'pages/Home/Home';

// path consts
const REGISTER = '/register';
const LOGIN = '/login';
const OIL = '/oil';
const WATERCOLOR = '/watercolor';
const DIGITAL = '/digital';
const MIX = '/mix';
const MODAL = '/modal';
const NOTFOUND = '/*';

const App = () => {

// Routes
const appRoutes = [
  
  {path: OIL, element: <Gallery />,},
  {path: WATERCOLOR, element: <Gallery />,},
  {path: DIGITAL, element: <Gallery />,},  
  {path: MIX, element: <Gallery />,},

  {path: MODAL, element: <ModalArt />,},

  {path: REGISTER, element: <SingUp />,},
  {path: LOGIN, element: <LogIn />,},
  {path: NOTFOUND, element: <NotFound />,}
];

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index
            element={<Home/>}
          />

          {appRoutes.map(({ path, element }) => 
          {return <Route key={nanoid()} path={path} element={element}/>})}

        </Route>
      </Routes>
    </>
  )
}

export default App