import React from 'react';
import './Details.css'
import { TrophyIcon } from "@heroicons/react/24/outline";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function footer() {
  return (
    <div class="body font">
      <div className='fst-c'>
        <div className='columns-2 flex'>
          <div className='seller item-center'>
            <p className='bld'>
              Habitación privada en cabaña. Anfitrión: Ale Y Cris
            </p>
            <p>2 huéspedes · 1 habitación · 1 cama · 1 baño privado
            </p>
          </div>
          <div className='seller-pp'>
            <CgProfile className="icon-f" />
          </div>
        </div>
        <div>
          <p className='bld'>
            <TrophyIcon className="icon" />
            Ale Y Cris es SuperAnfitrión
          </p>
          <p>Los SuperAnfitriones son anfitriones experimentados,
            con evaluaciones excelentes, que se esfuerzan al máximo por ofrecer estancias maravillosas.</p>
          <p className='bld'>
            <FaSwimmingPool className="icon" />
            Sumérgete
          </p>
          <p>Este es uno de los pocos lugares en la zona con una alberca.</p>
          <p className='bld'>
            <MdOutlineCalendarToday className="icon" />
            Cancelación gratuita durante 48 horas.
          </p>
        </div>
      </div>
      <div className='snd-c'>
        <p>asd</p>
      </div>
    </div>
  );
}
