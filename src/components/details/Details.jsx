import React from 'react';
import './Details.css'
import { TrophyIcon } from "@heroicons/react/24/outline";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import aircover from "../../assets/aircover.jpg";

export default function footer() {
  return (
    <div class="body font">
      <div className='fst-c'>
        <div className='c-sty'>
          <div className='seller'>
            <p className='bld text-xl'>
              Habitación privada en cabaña. Anfitrión: Ale Y Cris
            </p>
            <p className='text-base'>2 huéspedes · 1 habitación · 1 cama · 1 baño privado
            </p>
          </div>
          <div className='seller-pp'>
            <CgProfile className="icon-f" />
          </div>
        </div>
        {/* reference space */}
        {/* reference space */}
        {/* reference space */}
        {/* reference space */}
        <div>
          <div className='pdg-y g-col'>
            <div className='row-span-2'>
              <TrophyIcon className="icon" />
            </div>
            <div className=''>
              <p className='bld'>Ale Y Cris es SuperAnfitrión</p>
              <p>Los SuperAnfitriones son anfitriones experimentados,
                con evaluaciones excelentes, que se esfuerzan al máximo por ofrecer estancias maravillosas.</p>
            </div>
          </div>
          {/* reference space */}
          <div className='g-col'>
            <div className='row-span-2'>
              <FaSwimmingPool className="icon-m" />
            </div>
            <div className='spcn'>
              <p className='bld'>Sumérgete</p>
              <p>Este es uno de los pocos lugares en la zona con una alberca.</p>
            </div>
          </div>
          {/* reference space */}
          <p className='bld-l'>
            <MdOutlineCalendarToday className="icon-l" />
            Cancelación gratuita durante 48 horas.
          </p>
        </div>
        <div>
        <img className="img-s" src={aircover} alt='aircover'/>
        <p className='m-s'>Todas las reservaciones incluyen protección 
          gratuita en caso de que el anfitrión cancele, 
          de que haya imprecisiones en el anuncio o de 
          que surjan otros inconvenientes, como problemas 
          al momento de la llegada.
        </p>
        <button className='bld underline'>Más información.</button>
        </div>
        <div>
          <p>MORE HERE</p>
        </div>
      </div>
      {/* reference space */}
      {/* reference space */}
      {/* reference space */}
      {/* reference space */}
      <div className=''>
        <p className=''>Second Column</p>
      </div>
    </div>
  );
}
