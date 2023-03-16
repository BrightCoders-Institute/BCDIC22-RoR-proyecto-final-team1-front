import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

import './SignUser.css';
import 'react-phone-number-input/style.css'

export default function SignUser(props) {
  const [value, setValue] = useState();
  function handleClick() {
    props.onStateChange(false);
  }
  return (
    <div className='background'>
      <div className="signUpCard box-login flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-bold flex justify-center align-middle pb-4 w-full text-gray-800 border-b-gray-300 border-b-2">
          <AiOutlineClose className="closeBtn" onClick={handleClick} />
          <h1 className="text-center">Inicia sesión o regístrate</h1>
        </div>
        <div className="mt-10">
          <form action="#">
            <div className="flex mb-6 w-full border border-black p-2 rounded">
              <PhoneInput className="ml-2" placeholder="Número telefónico" value={value} onChange={setValue} />
            </div>
            <div className="flex w-full">
              <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#db0c64] hover:bg-[#da0c64] rounded py-2 w-full transition duration-150 ease-in">
                <span className="mr-2 uppercase">Continuar</span>
              </button>
            </div>
          </form>
        </div>
        <div className="relative mt-10 h-px">
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
        <button className="relative mt-6 border border-black rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-black"><AiOutlineMail /></span>
          <span>Continuar con correo electronico</span>
        </button>
      </div>
    </div>
  );
}
