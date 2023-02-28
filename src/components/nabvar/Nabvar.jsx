import logo from '../../assets/airbnb-icon.svg';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/20/solid";

import './NavBar.css'

export default function navBar() {
  return (
    <nav className='border-b'>
      <div className='mx-auto py-4 flex items-center justify-between px-16'>
        <div className='flex items-center cursor-pointer'>
          <img className='w-8' src={logo} alt="logo"></img>
          <h1 className='rausch text-xl'>airbnb</h1>
        </div>
        <div className="flex items-center border-2 rounded-full px-4 py-1 cursor-pointer">
          <span className='separator'>Cualquier lugar</span>
          <span className='separator'>Cualquier semana</span>
          <span className='how-many'>¿Cuantos?</span>
          <div className="mglass-icon">
            <MagnifyingGlassIcon className="h-5 w-5 text-neutral-50 mx-auto" />
          </div>
        </div>
        <div className='flex items-center'>
          <span className='mr-2 cursor-pointer'>Hazte anfritrion</span>
          <div className='rounded-full border-2 py-1 flex items-center cursor-pointer'>
            <Bars3Icon className="h-5 w-5 text-gray-500 mx-1" />
            <div className="bg-rausch rounded-full mx-1">
              <UserIcon className="h-7 w-7 text-neutral-50" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
