import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

import './LogUser.css';

export default function SignUser(props) {
  function handleClick() {
    props.onStateChange(false);
  }
  return (
    <div className='background'>
      <div className="signUpCard box-login flex flex-col overflow-scroll bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-lg h-4/5">
        <div className="font-bold flex justify-center align-middle pb-4 w-full text-gray-800 border-b-gray-300 border-b-2">
          <AiOutlineClose className="closeBtn" onClick={handleClick} />
          <h1 className="text-center">Inicia sesión o regístrate</h1>
        </div>
        <div className="mt-10">
          <form class="space-y-4 md:space-y-6" action="#">
            <div className="flex justify-start items-center">
              <h2 className="text-lg font-extrabold">Te damos la bienvenida a EarthBnD</h2>
            </div>
            <div>
              <label for="email" class="block mb-2 text-md font-bold text-dark dark:text-dark">Correo</label>
              <input type="email" name="email" id="email" class="bg-white border border-gray-700 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
            </div>
            <div>
              <label for="password" class="block mb-2 text-md font-bold text-dark dark:text-dark">Contraseña</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white border border-gray-700 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            <button type="submit" class="w-full text-white bg-[#E00B41] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center dark:bg-[#E00B41] dark:hover:bg-[#EE0B41] dark:focus:ring-primary-800">Login</button>
            <p class="text-sm font-light text-gray-700 dark:text-gray-700">
              No tienes una cuenta? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">SignUp</a>
            </p>
          </form>
        </div>
        <div className="relative mt-6 h-px">
          <div className="absolute left-0 top-0 flex items-center justify-center w-full -mt-2">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">o</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </div>
        <button className="relative mt-6 border border-black rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><FaFacebookSquare /></span>
          <span>Continuar con Facebook</span>
        </button>
        <button className="relative mt-6 border border-black rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><FcGoogle /></span>
          <span>Continuar con Google</span>
        </button>
        <button className="relative mt-6 border border-black rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-black"><FaApple /></span>
          <span>Continuar con Apple</span>
        </button>
      </div>
    </div>
  );
}

