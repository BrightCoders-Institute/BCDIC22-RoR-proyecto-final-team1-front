import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai"
import { HiShieldCheck } from "react-icons/hi"
import { FaAward } from "react-icons/fa"
import { ImDatabase } from "react-icons/im"

import './OwnerDetails.css'

export default function OwnerDetails({ details }) {

  const ownerId = details.place.user.id
  const [userData, setUserData] = useState(null)

  //Funtion to get current user data
  useEffect(() => {
    async function fetchUserData() {
      const url = `https://earthbnd.onrender.com/users/users/${ownerId}`;
      const response = await fetch(url);
      const userData = await response.json();
      setUserData(userData);
      console.log(ownerId)
    }
    fetchUserData();
  }, [ownerId]);

  //Funcion for the reserve button
  const handleClick = () => {
    const url = `https://web.whatsapp.com/send?phone=${userData.phone_number}`;
    window.open(url, '_blank')
  }

  return (
    <>

      <section className="text-dark border-b-gray-200 border-b-2">
        <div className="max-w-screen-xl px-4 py-2 sm:py-4 sm:px-6 lg:py-8 lg:px-8">

          <div className="flex justify-start items-center flex-wrap">
            <a href="#" className="relative block">
              <CgProfile className="mx-auto object-cover rounded-full h-16 w-16 " />
            </a>
            <div className="flex flex-col ml-2">
              <h2 className="text-xl font-bold">Anfitrion: {details.place.user.name}</h2>
              <p className="text-gray-500 text-sm">Se registro en diciembre de 2014</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:mt-6 md:grid-cols-2 md:gap-12">
            <div className='gap-4'>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-start items-center flex-row">
                  <AiFillStar className="h-6 w-6" />
                  <p className="ml-2 font-bold">224 Evaluaciones</p>
                </div>

                <div className="flex justify-start items-center flex-row">
                  <HiShieldCheck className="h-6 w-6" />
                  <p className="ml-2 font-bold">Identidad Verificada</p>
                </div>

                <div className="flex justify-start items-center flex-row">
                  <FaAward className="h-6 w-6" />
                  <p className="ml-2 font-bold">SuperAnfitrion</p>
                </div>
              </div>

              <div className="mt-4">
                <blockquote cite="" className="text-sm font-normal text-dark">
                  Retirado no de trabajar, si no de la muchedumbre enloquecida.
                  Llego a Belice en 2010. Comenzo Bird Island en 2013.
                  Servicio militar: Vietnam Era. Luego viaje por centroameri...
                </blockquote>
                <a href="#" className="text-sm font-bold text-dark underline">Mas informacion</a>
              </div>

              <div className="mt-4">
                <p className="text-sm font-extrabold text-dark">Durante tu estancia</p>
                <p className="text-dark text-sm font-normal mt-2">Solo cuando sea necesario.</p>
              </div>

              <div className="mt-4">
                <p className="text-sm font-extrabold text-dark">{details.place.user.name} es SuperAnfitrión</p>
                <blockquote cite="" className="text-sm font-normal text-dark mt-2">
                  Los super anfitriones son anfitriones con experiencia
                  y evaluaciones excelentes, que se esfuerzan al máximo por
                  ofrecer estancias maravillosas a sus huéspedes.
                </blockquote>
              </div>
            </div>

            <div className='gap-4'>
              <p className="text-dark text-sm font-normal">Idiomas: Inglés, Español</p>
              <p className="text-dark text-sm font-normal mt-2">Índice de respuesta: 100%</p>
              <p className="text-dark text-sm font-normal mt-2">Tiempo de respuesta: En menos de una hora</p>

              <div className="mt-4">
                <button type="button" className="button text-dark hover:bg-slate-200" onClick={handleClick}>Contacta al anfitrión</button>
              </div>

              <div className="mt-2 flex justify-start items-center">
                <ImDatabase className="mr-4 w-6 h-6 fill-red-400" />
                <blockquote cite="" className="text-sm font-light text-justify text-gray-600">
                  Al fin de proteger tus pagos, te pedimos que<br />
                  nunca transfieras dinero ni te comuniques<br />
                  fuera de las página de EarthBnD.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

