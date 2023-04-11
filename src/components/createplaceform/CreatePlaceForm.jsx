import './CreatePlaceForm.css'

const CreatePlaceForm = () => {
  return (
    <>
      <div id="background" aria-hidden="true" className="overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div className="newplace flex flex-col overflow-scroll bg-gray-800 px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-lg h-4/5">
          <div className="relative p-4 rounded-lg shadow sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-white dark:text-dark">
                Añadir lugar
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-dark" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label for="name" className="block mb-2 text-sm font-medium text-white dark:text-dark">Nombre</label>
                  <input type="text" name="name" id="name" className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="Nombre del lugar" required="" />
                </div>
                <div>
                  <label for="brand" className="block mb-2 text-sm font-medium text-white dark:text-dark">Dueño</label>
                  <input type="text" name="brand" id="brand" className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="Pancho" required="" readOnly={true} />
                </div>
                <div>
                  <label for="price" className="block mb-2 text-sm font-medium text-white dark:text-dark">Precio por noche</label>
                  <input type="number" name="price" id="price" className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="$2999" required="" />
                </div>
                <div>
                  <label for="category" className="block mb-2 text-sm font-medium text-white dark:text-dark">Ciudad</label>
                  <select id="category" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Selecciona ciudad</option>
                    <option value="TV">Colima</option>
                    <option value="PC">Guadalajara</option>
                  </select>
                </div>
                <div>
                  <label for="price" className="block mb-2 text-sm font-medium text-white dark:text-dark">Numero de cuartos</label>
                  <input type="number" name="price" id="price" className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="3" required="" />
                </div>
                <div>
                  <label for="price" className="block mb-2 text-sm font-medium text-white dark:text-dark">Numero de baños</label>
                  <input type="number" name="price" id="price" className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="2" required="" />
                </div>
                <div>
                  <label for="price" className="block mb-2 text-sm font-medium text-white dark:text-dark">Maximo numero de huespedes</label>
                  <input type="number" name="price" id="price" className="input-text focus:ring-primary-600 focus:border-primary-600" placeholder="6" required="" />
                </div>
                <div className="sm:col-span-2">
                  <label for="description" className="block mb-2 text-sm font-medium text-white dark:text-dark">Descripcion</label>
                  <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Escribe una descripcion del lugar aqui"></textarea>
                </div>
              </div>
              <button type="submit" className="text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 border border-blue-900 hover:bg-blue-900">
                <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                Add new place
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePlaceForm
