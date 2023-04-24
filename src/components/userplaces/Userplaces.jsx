import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { AiFillEye } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import CreatePlaceForm from '../../components/createplaceform/CreatePlaceForm';
import EditPlaceForm from '../../components/editplaceform/EditPlaceForm';

const Userplaces = () => {
  const [isFormAddActive, setIsFormAddActive] = useState(false)
  const [isFormEdActive, setIsFormEdActive] = useState(false)
  const [places, setPlaces] = useState([])
  const [userData, setUserData] = useState(null)
  const [placeId , setPlaceId] = useState('')
  const history = useNavigate()

  const handleStateChange = (newState) => {
    setIsFormAddActive(newState);
  }

  const handleStateChange1 = (newState) => {
    setIsFormEdActive(newState);
  }

  //Function for getting all the places
  useEffect(() => {
    fetch('https://earthbnd.onrender.com/places')
      .then(response => response.json())
      .then(data => setPlaces(data));

  }, []);
  // Function to get user data

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://earthbnd.onrender.com/current_user', {
        headers: {
          "content-type": 'application/json',
          "authorization": localStorage.getItem("token")
        },
      });
      let data = await response.json()
      setUserData(data)
    } catch (error) {
      history('/');
      return null;
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  //Function to delete a place
  const handleDelete = (place) => {
    const id = place.id
    setPlaceId(id)
    fetch(`https://earthbnd.onrender.com/deletePlace/${placeId}`, {
      method: 'delete',
    })
    .then(response => {
        if (response.ok) {
          window.alert('Lugar eliminado correctamente')
          window.location.reload()
        }else {
          window.alert('Ocurrio un problema')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const filteredPlaces = places.filter((place) => place.user_id === userData.id)
  return (
    <>
      <section className="bg-gray-50 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="bg-white relative shadow-lg sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-end space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button type="button" id="createProductModalButton" onClick={() => setIsFormAddActive(true)} className="flex items-center justify-center text-black bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">
                  <AiOutlinePlus className='h-4 w-4 mr-2' />
                  Add product
                </button>
                {isFormAddActive && (
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
                  {filteredPlaces.map((place) => (
                    <tr className="border-b">
                      <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap max-w-[12rem] truncate">{place.name}</th>
                      <td className="px-4 py-3">{place.price_by_night}</td>
                      <td className="px-4 py-3">{place.number_rooms}</td>
                      <td className="px-4 py-3">{place.number_bathrooms}</td>
                      <td className="px-4 py-3">{place.max_guest}</td>
                      <td className="px-4 py-3 max-w-[12rem] truncate">{place.latitude}</td>
                      <td className="px-4 py-3 max-w-[12rem] truncate">{place.longitude}</td>
                      <td className="px-4 py-3 max-w-[12rem] truncate">{place.description}</td>
                      <td className="px-4 py-3 flex flex-row justify-evenly">
                        <div>
                          <button type="button" onClick={() => setIsFormEdActive(true)}><FiEdit className='h-4 w-4' /></button>
                          {isFormEdActive && (
                            <EditPlaceForm onStateChange={handleStateChange1} data={place} />
                          )}
                        </div>
                        <div>
                          <button type='button'><AiFillEye className='h-4 w-4' /></button>
                        </div>
                        <div key={place}>
                          <button type='button' onClick={() => handleDelete(place)}><MdDeleteForever className='h-4 w-4' /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
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
