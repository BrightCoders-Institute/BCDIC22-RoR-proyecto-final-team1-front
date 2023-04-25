import { useState } from 'react'
import Phonenumber from '../phonenumber/Phonenumber';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import logo from '../../assets/airbnb-icon.svg';

import './NavbarUser.css'

const NavBarUser = ({ setCurrUser }) => {
  const [isActive, setIsActive] = useState(false)
  const [isPhoneActive, setIsPhoneActive] = useState(false)
  const [setShow] = useState(true)

  function handleStateChange(newState) {
    setIsPhoneActive(newState);
  }

  const logout = async (setCurrUser) => {
    const url = "https://earthbnd.onrender.com/logout"
    try {
      const response = await fetch(url, {
        method: 'delete',
        headers: {
          "content-type": 'application/json',
          "authorization": localStorage.getItem("token")
        },
      })
      const data = await response.json()
      if (!response.ok) {
        throw data.error
      } else {
        localStorage.removeItem("token")
        setCurrUser(null)
        window.location.reload()
        return null;
      }
    } catch (error) {
      console.log("Error", error)
    }
  }

  const handleClick = e => {
    e.preventDefault()
    logout(setCurrUser)
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

                <div className=''>
                  <div className='dropdown-item'>
                    Mensajes
                  </div>
                  <div className='dropdown-item'>
                    Notificaciones
                  </div>
                  <div className='dropdown-item'>
                    Listas de Favoritos
                  </div>
                  <div className='dropdown-item'>
                    Viajes
                  </div>
                </div>

                <div className='separator2'>
                  <div className='dropdown-item'>
                    <Link to='/myplaces'>Pon tu casa en EarthDnd</Link>
                  </div>
                  <div className='dropdown-item' onClick={() => setIsPhoneActive(true)}>
                    Agrega o cambia tu numero de telefono
                  </div>
                  <div className='dropdown-item'>
                    <Link to='/profile'>Cuenta</Link>
                  </div>
                </div>

                <div className='separator2'></div>
                <div className='dropdown-item'>
                  Ayuda
                </div>
                <div className='dropdown-item' onClick={handleClick}>
                  Logout
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
      {isPhoneActive && (
        <Phonenumber onStateChange={handleStateChange} setShow={setShow} />
      )}
    </nav>
  )
}

export default NavBarUser
