import React from 'react'
import './AccountPage.css'
import Tarjetas from "./data.jsx";

export default function accountpage() {
  return (
    <>
      <div className='bdy'>
        <div className="top">
          <div className="cuenta">Cuenta</div>
          <div className="detailsp">
            <div className='font-semibold'>Juan Gilberto Mejia Carrazco,</div>
            <div className='ml-2'>rkrzkols@gmail.com ·</div>
            <button className='ml-2 underline font-semibold'>Ir a tu perfil</button>
          </div>
        </div>
        <div className="mid">
          <div class="grid grid-cols-3 gap-4">
            <Tarjetas/>
          </div>
        </div>
        <div className="bott">
          <div className="text-sm mt-10">¿Necesitas desactivar tu cuenta?</div>
          <div className="text-xs mt-2"><button className='underline'>¡Encárgate de eso ahora!</button></div>
        </div>
      </div>
    </>
  );
}
