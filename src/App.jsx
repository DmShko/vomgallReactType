import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
import React from 'react'

// import component pages
import SharedLayout from './components/SharedLayout/SharedLayout'
import DigitalGallery from './components/DigitalGallery/DigitalGallery';
import WatercolorGallery from './components/WatercolorGallery/WatercolorGallery';
import OilGallery from './components/OilGallery/OilGallery';
import MixGallery from './components/MixGallery/MixGallery';
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
  
  {path: OIL, element: <OilGallery />,},
  {path: WATERCOLOR, element: <WatercolorGallery />,},
  {path: DIGITAL, element: <DigitalGallery />,},  
  {path: MIX, element: <MixGallery />,},

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