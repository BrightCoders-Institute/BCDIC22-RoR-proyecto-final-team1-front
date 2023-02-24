import logo from '../assets/airbnb-icon.svg';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function navBar() {
  return (
    <nav>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div className="flex">
          <span>Cualquier lugar</span>
          <span>Cualquier semana</span>
          <span>¿Cuantos? 
          </span>
          <div className="h-8 w-8 flex items-center bg-red-600 rounded-3xl ">
            <MagnifyingGlassIcon className="h-6 w-6 text-neutral-50" />
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
