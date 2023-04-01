import { useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import LogUser from "../loguser/LogUser"
import SignUser from '../signuser/Signuser'
import logo from '../../assets/airbnb-icon.svg';

import './NavBar.css'

const NavBar = ({ setCurrUser }) => {
  const [isActive, setIsActive] = useState(false)
  const [isLoginActive, setIsLoginActive] = useState(false)
  const [isSignupActive, setIsSignupActive] = useState(false)
  const [setShow] = useState(true)

  function handleStateChange(newState) {
    setIsLoginActive(newState);
    setIsSignupActive(newState);
  }
  return (
    <nav className='border-b'>
      <div className='nav-container'>
        <Link className='flex items-center cursor-pointer' to={`/`}>
          <img className='w-8' src={logo} alt="logo"></img>
          <h1 className='rausch text-xl'>earthbnd</h1>
        </Link>
        <div className='search-bar'>
          <span className='separator'>Cualquier lugar</span>
          <span className='separator'>Cualquier semana</span>
          <span className='how-many'>¿Cuántos?</span>
          <div className="mglass-icon">
            <MagnifyingGlassIcon className="h-5 w-5 text-neutral-50 mx-auto" />
          </div>
        </div>
        <div className='flex items-center'>
          <span className='mr-2 cursor-pointer'>Hazte anfritrión</span>
          <div className='options-container' onClick={() => setIsActive(!isActive)}>
            <Bars3Icon className="h-5 w-5 text-gray-500 mx-1" />
            <div className="bg-gray rounded-full mx-1">
              <UserIcon className="h-7 w-7 text-neutral-50" />
            </div>
            {isActive && (
              <div className='dropdown-content'>
                <div className='dropdown-item' onClick={() => setIsSignupActive(true)}>
                  Registrate
                </div>
                <div className='dropdown-item' onClick={() => setIsLoginActive(true)}>
                  Iniciar sesion
                </div>
                <div className='separator2'>
                  <div className='dropdown-item'>
                    Pon tu casa en EarthDnd
                  </div>
                  <div className='dropdown-item'>
                    Organiza una experiencia
                  </div>
                  <div className='dropdown-item'>
                    Ayuda
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isLoginActive && (
        <LogUser onStateChange={handleStateChange} setCurrUser={setCurrUser} setShow={setShow} />
      )}
      {isSignupActive && (
        <SignUser onStateChange={handleStateChange} setCurrUser={setCurrUser} setShow={setShow} />
      )}
    </nav>
  )
}

export default NavBar
