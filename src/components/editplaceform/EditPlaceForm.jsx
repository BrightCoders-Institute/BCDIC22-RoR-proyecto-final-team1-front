import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './EditPlaceForm.css'

const EditPlaceForm = (props) => {

  // Constants for the values that the form will sent to the api
  const place = props.data
  const [name, setName] = useState(place.name)
  const [price, setPrice] = useState(place.price_by_night)
  const [rooms, setRooms] = useState(place.number_rooms)
  const [bathrooms, setBathrooms] = useState(place.number_bathrooms)
  const [guests, setGuests] = useState(place.max_guest)
  const [latitude, setLatitude] = useState(place.latitude)
  const [longitude, setLongitude] = useState(place.longitude)
  const [description, setDescription] = useState(place.description)
  const history = useNavigate()

  //Function to close the component
  function handleClick() {
    props.onStateChange(false);
  }

  //Functions to asign positive values to the number inputs
  const handleInputChange = (event) => {
    const value = event.target.value;

    if (value >= 0 || value === '')
      setPrice(value)
  }

  const handleInputChange2 = (event) => {
    const value = event.target.value;

    if (value >= 0 || value === '')
      setRooms(value)
  }

  const handleInputChange3 = (event) => {
    const value = event.target.value;


    if (value >= 0 || value === '')
      setBathrooms(value)
  }

  const handleInputChange4 = (event) => {
    const value = event.target.value;

    if (value >= 0 || value === '')
      setGuests(value)
  }

  //Change names to the values sent on stringify
  const price_by_night = price;
  const number_rooms = rooms;
  const number_bathrooms = bathrooms;
  const max_guest = guests;

  //Function to asign the values from the form to the backend places table
  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedPlace = {
      name: event.target.name.value || name,
      price_by_night: event.target.price.value || price_by_night,
      number_rooms: event.target.rooms.value || number_rooms,
      number_bathrooms: event.target.bathrooms.value || number_bathrooms,
      max_guest: event.target.guests.value || max_guest,
      latitude: event.target.latitude.value || latitude,
      longitude: event.target.longitude.value || longitude,
      description: event.target.description.value || description
    }

    const response = await fetch(`https://earthbnd.onrender.com/updatePlace/${place.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPlace),
    });

    if (response.ok) {
      window.alert('Editado exitosamente')
      props.onStateChange(false);
      history('/myplaces');
      return null;
    } else {
      window.alert('Hubo un error')
    }
  }

  return (
    <>
      <div id="background" aria-hidden="true" className="overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div className="newplace flex flex-col overflow-scroll bg-gray-800 px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-lg h-4/5">
          <div className="relative p-4 rounded-lg shadow sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-white dark:text-dark">
                Editar lugar
              </h3>
              <button type="button" onClick={handleClick} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-dark" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label for="name" className="block mb-2 text-sm font-medium text-white dark:text-dark">Nombre</label>
                  <input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="Nombre del lugar" required />
                </div>
                <div>
                  <label for="price" className="block mb-2 text-sm font-medium text-white dark:text-dark">Precio por noche</label>
                  <input type="number" name="price" id="price" value={price} onChange={handleInputChange} className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="$2999" required />
                </div>
                <div>
                  <label for="rooms" className="block mb-2 text-sm font-medium text-white dark:text-dark">Numero de cuartos</label>
                  <input type="number" name="rooms" id="rooms" value={rooms} onChange={handleInputChange2} className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="3" required />
                </div>
                <div>
                  <label for="bathrooms" className="block mb-2 text-sm font-medium text-white dark:text-dark">Numero de baños</label>
                  <input type="number" name="bathrooms" id="bathrooms" value={bathrooms} onChange={handleInputChange3} className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="2" required />
                </div>
                <div>
                  <label for="guests" className="block mb-2 text-sm font-medium text-white dark:text-dark">Maximo numero de huespedes</label>
                  <input type="number" name="guests" id="guests" value={guests} onChange={handleInputChange4} className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="6" required />
                </div>
                <div>
                  <label for="latitude" className="block mb-2 text-sm font-medium text-white dark:text-dark">Maximo numero de huespedes</label>
                  <input type="number" name="latitude" id="latitude" value={latitude} onChange={(event) => setLatitude(event.target.value)} className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="6" required />
                </div>
                <div>
                  <label for="longitude" className="block mb-2 text-sm font-medium text-white dark:text-dark">Maximo numero de huespedes</label>
                  <input type="number" name="longitude" id="longitude" value={longitude} onChange={(event) => setLongitude(event.target.value)} className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="6" required />
                </div>
                <div className="sm:col-span-2">
                  <label for="description" className="block mb-2 text-sm font-medium text-white dark:text-dark">Descripcion</label>
                  <textarea id="description" name="description" rows="4" value={description} onChange={(event) => setDescription(event.target.value)} className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Escribe una descripcion del lugar aqui"></textarea>
                </div>
              </div>
              <button type="submit" className="text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 border border-blue-900 hover:bg-blue-900">
                <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                Editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditPlaceForm
