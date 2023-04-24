import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { AiFillEye } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import CreatePlaceForm from '../../components/createplaceform/CreatePlaceForm';

const Userplaces = () => {
  const [isFormActive, setIsFormActive] = useState(false)

  const handleStateChange = (newState) => {
    setIsFormActive(newState);
  }

  return (
    <>
      <section className="bg-gray-50 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="bg-white relative shadow-lg sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-end space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button type="button" id="createProductModalButton" onClick={() => setIsFormActive(true)} className="flex items-center justify-center text-black bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">
                  <AiOutlinePlus className='h-4 w-4 mr-2' />
                  Add product
                </button>
                {isFormActive && (
                  <CreatePlaceForm onStateChange={handleStateChange} />
                )}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border border-b-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-4">Nombre</th>
                    <th scope="col" className="px-4 py-3">Prec. x noche</th>
                    <th scope="col" className="px-4 py-3">Ciudad</th>
                    <th scope="col" className="px-4 py-3">Num. de cuartos</th>
                    <th scope="col" className="px-4 py-3">Num. de baños</th>
                    <th scope="col" className="px-4 py-3">Max. num. de huespedes</th>
                    <th scope="col" className="px-4 py-3">Latitud</th>
                    <th scope="col" className="px-4 py-3">Longitud</th>
                    <th scope="col" className="px-4 py-3">Descripcion</th>
                    <th scope="col" className="px-4 py-3">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">Apple iMac 27&#34;</th>
                    <td className="px-4 py-3 max-w-[12rem] truncate">PC</td>
                    <td className="px-4 py-3">Apple</td>
                    <td className="px-4 py-3">jiidwq</td>
                    <td className="px-4 py-3">$2999</td>
                    <td className="px-4 py-3">PC</td>
                    <td className="px-4 py-3 max-w-[12rem] truncate">Apple</td>
                    <td className="px-4 py-3 max-w-[12rem] truncate">idje</td>
                    <td className="px-4 py-3 max-w-[12rem] truncate">$2999</td>
                    <td className="px-4 py-3 flex flex-row justify-evenly">
                      <button type="button"><FiEdit className='h-4 w-4' /></button>
                      <button type='button'><AiFillEye className='h-4 w-4' /></button>
                      <button type='button'><MdDeleteForever className='h-4 w-4' /></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Userplaces;
