import { Route, Routes } from 'react-router-dom';
import React from 'react'

// import component pages
import DigitalGallery from './components/DigitalGallery';
import WatercolorGallery from './components/WatercolorGallery';
import OilGallery from './components/OilGallery';
import MixGallery from './components/MixGallery';
import NotFound from './components/NotFound';
import SingUp from './components/SingUp';
import LogIn from './components/LogIn';

// path consts
const REGISTER = '/register';
const LOGIN = '/login';
const DIGITAL = '/digital';
const MIX = '/mix';
const OIL = '/oil';
const WATERCOLOR = '/watercolor';
const NOTFOUND = '/*';

const App = () => {

// Routes
const appRoutes = [
  {path: REGISTER, element: <SingUp />,},
  {path: LOGIN, element: <LogIn />,},
  {path: MIX, element: <MixGallery />,},
  {path: OIL, element: <OilGallery />,},
  {path: WATERCOLOR, element: <WatercolorGallery />,},
  {path: DIGITAL, element: <DigitalGallery />,},
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