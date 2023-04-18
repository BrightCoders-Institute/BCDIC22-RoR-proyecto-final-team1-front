import React from 'react'
import './Details.css'
import { TrophyIcon } from "@heroicons/react/24/outline";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiFlowerPot } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { MdOutlineHotTub } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineBeachAccess } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { MdSmokeFree } from "react-icons/md";
import aircover from "../../assets/aircover.jpg";
import Reserve from "../../components/reserve/reserve"

export default function footer({details}) {
  return (
    <div className="body">
      <div className='fst-c'>
        <div className='c-sty'>
          <div className='seller'>
            <p className='bld text-xl'>
              { details.place.description }. Anfitrión: {details.place.user}
            </p>
            <p className='text-base'>
              <i>{ details.place.max_guest } huéspede{ details.place.max_guest > 1 ? "s":"" } · </i>
              <i>{ details.place.number_rooms} { details.place.number_rooms > 1 ? "habitaciones":"habitación"} · </i>
              <i>1 cama · </i>
              <i>{ details.place.number_bathrooms } baño{ details.place.number_bathrooms > 1 ? "s":""} privado{ details.place.number_bathrooms > 1 ? "s":""}</i>
            </p>
          </div>
          <div className='seller-pp'>
            <CgProfile className="icon-f" />
          </div>
        </div>
        <div>
          <div className='pdg-y g-col'>
            <div className='row-span-2'>
              <TrophyIcon className="icon" />
            </div>
            <div>
              <p className='bld'>{details.place.user} es SuperAnfitrión</p>
              <p>Los SuperAnfitriones son anfitriones experimentados,
                con evaluaciones excelentes, que se esfuerzan al máximo por ofrecer estancias maravillosas.</p>
            </div>
          </div>
          <div className='g-col'>
            <div className='row-span-2'>
              <FaSwimmingPool className="icon-m" />
            </div>
            <div className='spcn'>
              <p className='bld'>Sumérgete</p>
              <p>Este es uno de los pocos lugares en la zona con una alberca.</p>
            </div>
          </div>
          <p className='bld-l'>
            <MdOutlineCalendarToday className="icon-l" />
            Cancelación gratuita durante 48 horas.
          </p>
        </div>
        <div>
          <img className="img-s" src={aircover} alt='aircover' />
          <p className='m-s'>Todas las reservaciones incluyen protección
            gratuita en caso de que el anfitrión cancele,
            de que haya imprecisiones en el anuncio o de
            que surjan otros inconvenientes, como problemas
            al momento de la llegada.
          </p>
          <button className='bld-mi '>Más información.</button>
        </div>
        <div>
          <p className='m-s'>¡Conoce Bosque Geométrico en Tepoztlán!</p>
          <p className='m-s'>
            Un espacio único, ecológico y Petfriendly. Lejos del ruido de la ciudad...
            Un escondite ideal para aventureros, parejas y viajeros que buscan relajarse.
            Una vista panorámica inigualable a las montañas y valle.
          </p>
          <p>...</p>
          <button className='sty '>
            <p className='m-n'>Mostrar más</p>
            <MdKeyboardArrowRight className="icon-d" />
          </button>
        </div>
        <div className='mb-5'>
          <p className='bld text-xl mt-5'>Lo que ofrece este lugar</p>
          <div className='amen'>
            <div className='i-c'><GiFlowerPot className="icon" /></div>
            <div className='i-c'><MdOutlineFoodBank className="icon" /></div>
            <div className='i-c'><MdOutlineHotTub className="icon" /></div>
            <div className='i-c'><MdBalcony className="icon" /></div>
            <div className='i-c'><AiOutlineWifi className="icon" /></div>
            <div className='t-c'>Vista al jardín</div>
            <div className='t-c'>Cocina</div>
            <div className='t-c'>Jacuzzi privado</div>
            <div className='t-c'>Terraza o balcón</div>
            <div className='t-c'>WIFI</div>
            <div className='i-c'><MdOutlineBeachAccess className="icon" /></div>
            <div className='i-c'><AiOutlineCar className="icon" /></div>
            <div className='i-c'><FiMonitor className="icon" /></div>
            <div className='i-c'><GiFlowerPot className="icon" /></div>
            <div className='i-c'><MdSmokeFree className="icon" /></div>
            <div className='t-c'>Vista a la playa</div>
            <div className='t-c'>Estacionamiento gratuito en las instalaciones</div>
            <div className='t-c'>Televisión y televisión por cable estándar</div>
            <div className='t-c'>Jardín privado, Con valla en parte del perímetro</div>
            <div className='t-c'>Libre de humo de tabaco</div>
          </div>
          <button className='btn-amen'>Mostrar los 27 servicios</button>
        </div>
          <div></div>
      </div>
      <div>
        <div className='sticky top-5 mb-5'>
        <div className='mt-5 mb-5'><Reserve /></div>
        </div>
      </div>
    </div>
  );
}
