import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

// component import
// import ModalArt from 'components/ModalArt/ModalArt';

// import css file
import sh from './SharedLayout.module.css';

import { Loader } from '../Loader/Loader';


const SharedLayout = () => {
  return (
    <>
        <section>
            <header>
               <nav className="page-nav">
                        <NavLink className={sh.link} to="/">
                        VombArt
                        </NavLink>
                    <ul className="nav-list-one list">
                        <li className="nav-one-item">
                            
                            <NavLink className={sh.link} to="/oil">
                            Oil
                            </NavLink>
                           
                        </li>

                        <li className="nav-one-item">

                            <NavLink className={sh.link} to="/watercolor">
                            Watercolor
                            </NavLink>
                           
                        </li>

                        <li className="nav-one-item">

                            <NavLink className={sh.link} to="/digital">
                            Digital
                            </NavLink>
                           
                        </li>

                        <li className="nav-one-item">

                            <NavLink className={sh.link} to="/mix">
                            Mix
                            </NavLink>
                           
                        </li>
                    </ul>

                    <ul className="nav-list-two list">
                        <li className="nav-two-item">

                           
                            About
                            
                            
                        </li>
                        <li className="nav-two-item">

                          
                            Contacts
                         
                           
                        </li>
                    </ul>
                    <ul className="nav-list-two list">
                        <li className="nav-two-item">

                            <NavLink className={sh.link} to="/register">
                            SingUp
                            </NavLink>
                            
                        </li>
                        <li className="nav-two-item">
                            
                            <NavLink className={sh.link} to="/logIn">
                            LogIn
                            </NavLink>
                           
                        </li>
                    </ul>
                </nav>  
            </header>
        
            <section className={sh.section}>
                <main>
                    <Suspense fallback={<Loader/>}>
                        <Outlet />
                    </Suspense>
                </main>
            </section>
        </section>
    </>
  )
}

export default SharedLayout