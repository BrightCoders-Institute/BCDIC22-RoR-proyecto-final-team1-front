import logo from '../../assets/airbnb-icon.svg';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import './NavBar.css'

export default function navBar() {
  return (
    <nav>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className='flex logoFont items-center'>
          <img src={logo} alt="logo"></img>
          <h1>AirBnb</h1>
        </div>
        <div className="flex justify-start px-2 flex-grow-0">
          <span>Cualquier lugar</span>
          <span>Cualquier semana</span>
          <span>¿Cuantos? 
          </span>
          <div className="h-8 w-8 flex items-center bg-red-600 rounded-full">
            <MagnifyingGlassIcon className="h-5 w-5 text-neutral-50 mx-auto" />
          </div>
        </div>
        <div>
          <span>Hazte anfritrion</span>
        </div>
        <div>
          
        </div>
      </div>
    </nav>
  )
}
