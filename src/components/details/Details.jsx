import React from 'react';
import './Details.css'
import { TrophyIcon } from "@heroicons/react/24/outline";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function footer() {
    return (
        <div class="columns-2 flex font">
            <div className='w-3/5 divide-y'>
                <div className=' column-2'>
                    <div>
                    <p className='bld'>
                        Habitación privada en cabaña. Anfitrión: Ale Y Cris
                    </p>
                    <p>2 huéspedes1 habitación1 cama1 baño privado
                    </p>
                    </div>
                    <div><CgProfile className="h-6 w-6 text-black-500 justify-center" /></div>
                </div>
                <div>
                    <p className='bld'>
                        <TrophyIcon className="h-6 w-6 text-black-500" />
                        Ale Y Cris es SuperAnfitrión
                    </p>
                    <p>Los SuperAnfitriones son anfitriones experimentados, 
                    con evaluaciones excelentes, que se esfuerzan al máximo por ofrecer estancias maravillosas.</p>
                    <p className='bld'>
                        <FaSwimmingPool className="h-6 w-6 text-black-500" />
                        Sumérgete
                    </p>
                    <p>Este es uno de los pocos lugares en la zona con una alberca.</p>
                <p className='bld'>
                    <MdOutlineCalendarToday className="h-6 w-6 text-black-500" />
                    Cancelación gratuita durante 48 horas.
                </p>
                </div>
            </div>
                <div className='w-2/5'>asd</div>
        </div>
    );
}
