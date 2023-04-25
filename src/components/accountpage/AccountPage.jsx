import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AccountPage.css'
import Tarjetas from "./data.jsx";

export default function Accountpage() {
  const [userData, setUserData] = useState(null)
  const history = useNavigate()

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
            <Tarjetas />
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
