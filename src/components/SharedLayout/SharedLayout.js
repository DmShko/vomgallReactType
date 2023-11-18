import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

// component import
// import ModalArt from 'components/ModalArt/ModalArt';

// import css file
import sh from './SharedLayout.module.scss';

import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
        
            <header className={sh.header}>
               <nav className={sh.pageNav}>
                        <NavLink className={sh.link} to="/">
                        VombArt
                        </NavLink>
                    <ul className={`${sh.navListOne} ${sh.list}`}>
                        <li className={`${sh.navOneItem} ${sh.link}`}>
                            
                            <NavLink className={sh.link} to="/oil">
                            Oil
                            </NavLink>
                           
                        </li>

                        <li className={`${sh.navOneItem} ${sh.link}`}>

                            <NavLink className={sh.link} to="/watercolor">
                            Watercolor
                            </NavLink>
                           
                        </li>

                        <li className={`${sh.navOneItem} ${sh.link}`}>

                            <NavLink className={sh.link} to="/digital">
                            Digital
                            </NavLink>
                           
                        </li>

                        <li className={`${sh.navOneItem} ${sh.link}`}>

                            <NavLink className={sh.link} to="/mix">
                            Mix
                            </NavLink>
                           
                        </li>
                    </ul>

                    <ul className={`${sh.navListOne} ${sh.list}`}>
                        <li className={`${sh.navOneItem} ${sh.link}`}>

                           
                            About
                            
                            
                        </li>
                        <li className={`${sh.navOneItem} ${sh.link}`}>

                          
                            Contacts
                         
                           
                        </li>
                    </ul>
                    <ul className={`${sh.navListOne} ${sh.list}`}>
                        <li className={`${sh.navOneItem} ${sh.link}`}>

                            <NavLink className={sh.link} to="/register">
                            SingUp
                            </NavLink>
                            
                        </li>
                        <li className={`${sh.navOneItem} ${sh.link}`}>
                            
                            <NavLink className={sh.link} to="/logIn">
                            LogIn
                            </NavLink>
                           
                        </li>
                    </ul>
                </nav>  
            </header>
        
            <section className={sh.section}>
                <main className={sh.container}>
                    <Suspense fallback={<Loader/>}>
                        <Outlet />
                    </Suspense>
                </main>
            </section>
        
    </>
  )
}

export default SharedLayout