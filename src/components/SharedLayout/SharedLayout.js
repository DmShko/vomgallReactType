import { NavLink, Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import ModalArt from 'components/ModalArt/ModalArt';
import { change } from 'vomgallStore/gallerySlice';

// component import
// import ModalArt from 'components/ModalArt/ModalArt';

// import css file
import sh from './SharedLayout.module.scss';

import { Loader } from '../Loader/Loader';

const SharedLayout = () => {

  const [ modalToggle, setModalToggle] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit, formState:{errors}, reset} = useForm({mode: 'onBlur'});
  
  const dispatch = useDispatch();
  const selectorTargetName = useSelector(state => state.gallery.buttonTargetName);
    
  const toggleModal = (evt) => {
    
    dispatch(change({data: evt?.target.id, operation: 'changeButtonTargetName',}));
    setModalToggle(value => !value);

  };

  const stateChange = data => {

    const { name, value } = data;

    // change 'name' and 'number' without use previous value
    switch(name) {
        case 'Name':
            setName(value);
            break;
        case 'Email':
            setEmail(value)
            break;
        case 'Password':
            setPassword(value)
            break;
        default: break;
    }

  };

  const inputChange = evt => {
    
    // change 'name','email', 'password'
    stateChange(evt.target);
  };

  const addUser = (_, evt) => {
   
      evt.preventDefault();
   
    reset({Name: '', Number: ''});
   
  };

  return (
    <>
        
            <header className={sh.header}>
               <nav className={sh.pageNav}>
                        <NavLink className={sh.link} to="/">
                        VombArt
                        </NavLink>
                    <ul className={sh.list}>
                        <li className={`${sh.navOneItem} ${sh.link}`}>
                            
                            <NavLink className={sh.linkNav} to="/oil">
                            Oil
                            </NavLink>
                           
                        </li>

                        <li className={`${sh.navOneItem} ${sh.link}`}>

                            <NavLink className={sh.linkNav} to="/watercolor">
                            Watercolor
                            </NavLink>
                           
                        </li>

                        <li className={`${sh.navOneItem} ${sh.link}`}>

                            <NavLink className={sh.linkNav} to="/digital">
                            Digital
                            </NavLink>
                           
                        </li>

                        <li className={`${sh.navOneItem} ${sh.link}`}>

                            <NavLink className={sh.linkNav} to="/mix">
                            Mix
                            </NavLink>
                           
                        </li>
                    </ul>

                    <ul className={sh.list}>
                        <li className={sh.link}>

                           <p className={sh.linkNav} onClick={toggleModal} id='about'>About</p>
                            
                        </li>
                        <li className={sh.link}>

                          <p className={sh.linkNav} onClick={toggleModal} id='contacts'>Contacts</p>
                             
                        </li>
                    </ul>

                    <ul className={sh.list}>
                        <li className={`${sh.navOneItem} ${sh.link}`}>

                            <p className={sh.linkNav} onClick={toggleModal} id='singUp'>SingUp</p>
                            
                        </li>
                        <li className={`${sh.navOneItem} ${sh.link}`}>
                            
                            <p className={sh.linkNav} onClick={toggleModal} id='logIn'>LogIn</p>
                           
                        </li>
                    </ul>
                </nav>  
            </header>
        
            {modalToggle && <ModalArt openClose={toggleModal}>
               
             
                {selectorTargetName === 'about'? 
                <div >
                    <h2 style={{color: 'black'}}>About VomBart and me.</h2>
                    <p>Hello! My name is Dmitry. I have many hobbies, including painting. 
                            Since childhood, I dreamed of learning to draw professionally, because
                             I knew that then I would be happy. That's exactly what happens. 
                             I could not become an artist at the level of famous masters. 
                             However, I am happy when I do it again and again. 
                             I sincerely thank the artist Olga Vlasova, who at a certain stage helped to improve my technical level.
                             </p>
                </div> : ''}
              
                {selectorTargetName === 'contacts' ? <div>
                    <p style={{color: 'black'}}> LinkedIn: </p>
                    <p style={{color: 'black'}}> Email: </p>
                </div> : ''}

                {selectorTargetName === 'singUp' ? <div>
                    <form className={sh.fise} onSubmit={handleSubmit(addUser)}>
                        <fieldset>
                        <legend>SingUp</legend>

                            <div className={sh.field}>
                            <label className={sh.lab}> Name
                                <input {...register('Name', {required: 'Please fill the Name field!', 
            
                                maxLength: {value:16, message: 'Invalid length!'},  value:name, pattern: {value: /\w{0}[a-zA-Zа-яА-Я]+\s\w{0}[a-zA-Zа-яА-Я]+/, message: 'Invalid Name!'}})} 
                                className={sh.in} 
                                type="text"
                              
                                onChange={inputChange}
                                title="Name"
                                placeholder="Enter name..."></input>
                            </label>

                            <label className={sh.lab}> Email
                                <input {...register('Email', {required: 'Please fill the Email field!', 
            
                                maxLength: {value:16, message: 'Invalid length!'},  value:email, pattern: {value: /\w{0}[a-zA-Zа-яА-Я]+\s\w{0}[a-zA-Zа-яА-Я]+/, message: 'Invalid Email!'}})} 
                                className={sh.in} 
                                type="text"
                            
                                onChange={inputChange}
                                title="Email"
                                placeholder="Enter email..."></input>
                            </label>

                            <label className={sh.lab}> Password
                                <input 
                                className={sh.in} {...register('Password', {required: 'Please fill the Password field!', 
            
                                maxLength: {value:16, message: 'Invalid length!'},  value:password, pattern: {value: /\w{0}[a-zA-Zа-яА-Я]+\s\w{0}[a-zA-Zа-яА-Я]+/, message: 'Invalid Password!'}})} 
                                type="password"
                                
                                onChange={inputChange}
                                title="Password"
                                placeholder="Enter password..."></input>
                            </label>

                            <button className={sh.button}>SingUp</button>
                            </div>
                        
                        </fieldset>
                    </form>
                </div> : ''}

                {selectorTargetName === 'logIn' ? <div>
                    <form className={sh.fise} onSubmit={handleSubmit(addUser)}>
                        <fieldset >
                        <legend >LogIn</legend>
                            <div className={sh.field}>
                            <label className={sh.lab}> Email
                                <input {...register('Email', {required: 'Please fill the Email field!', 
            
                                maxLength: {value:16, message: 'Invalid length!'},  value:email, pattern: {value: /\w{0}[a-zA-Zа-яА-Я]+\s\w{0}[a-zA-Zа-яА-Я]+/, message: 'Invalid Email!'}})}

                                className={sh.in} 
                                type="text"
                               
                                onChange={inputChange}
                                title="Email"
                                placeholder="Enter email..."></input>
                            </label>

                            <label className={sh.lab}> Password
                            <input {...register('Password', {required: 'Please fill the Password field!', 
            
                            maxLength: {value:16, message: 'Invalid length!'},  value:password, pattern: {value: /\w{0}[a-zA-Zа-яА-Я]+\s\w{0}[a-zA-Zа-яА-Я]+/, message: 'Invalid Password!'}})}

                            className={sh.in}
                            type="password"
                          
                            onChange={inputChange}
                           
                            title="Password"
                            placeholder="Enter password..."></input>
                            </label>

                            <button className={sh.button}>LogIn</button>
                        </div>
                        
                        </fieldset>
                    </form>
                </div> : ''}

            </ModalArt>}

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