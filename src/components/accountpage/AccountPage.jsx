import React from 'react'
import './AccountPage.css'


export default function accountpage() {
  return (
    <>
      <div className="top">
        <div className="">Cuenta</div>
        <div className="">Juan Gilberto Mejia Carrazco, rkrzkols@gmail.com <button>Ir a tu perfil</button></div>
      </div>
      <div className="mid">
        <div class="grid grid-cols-3 gap-4">
          <div className="bg-cyan-500 drop-shadow-md rounded-lg text-center">01</div>
          <div className="">02</div>
          <div className="">03</div>
          <div className="">04</div>
          <div className="">05</div>
          <div className="">06</div>
          <div className="">07</div>
          <div className="">08</div>
          <div className="">09</div>
          <div className="">10</div>
        </div>
        </div>
        <div className="bott">
          <div className="">¿Necesitas desactivar tu cuenta?</div>
          <div className=""><button>¡Encárgate de eso ahora!</button></div>
        </div>
    </>
  );
}
