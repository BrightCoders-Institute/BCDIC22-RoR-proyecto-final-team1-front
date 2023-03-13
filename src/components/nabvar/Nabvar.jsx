import { useState } from 'react'
import logo from '../../assets/airbnb-icon.svg';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/20/solid";
import './NavBar.css'

export default function NavBar() {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className='border-b'>
      <div className='nav-container'>
        <div className='flex items-center cursor-pointer'>
          <img className='w-8' src={logo} alt="logo"></img>
          <h1 className='rausch text-xl'>earthbnd</h1>
        </div>
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
                <div className='dropdown-item'>
                  Registrate
                </div>
                <div className='dropdown-item'>
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
    </nav>
  )
}
