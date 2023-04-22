import React from 'react'
import './AccountPage.css'
import { IdentificationIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { CogIcon } from "@heroicons/react/24/outline";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { GiftTopIcon } from "@heroicons/react/24/outline";


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
            <a href="#" class="card-1">
              <IdentificationIcon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Información Personal</h5>
              <p class="ext-card">Proporciona tus datos personales e indícanos
                cómo podemos ponernos en contacto contigo</p>
            </a>
            <a href="#" class="card-1">
              <ShieldCheckIcon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Inicio de sesión y seguridad</h5>
              <p class="ext-card">Actualiza tu contraseña y protege tu cuenta</p>
            </a>
            <a href="#" class="card-1">
              <BanknotesIcon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Pagos y cobros</h5>
              <p class="ext-card">Revisa pagos, cobros, cupones y tarjetas de regalo</p>
            </a>
            <a href="#" class="card-1">
              <DocumentIcon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Impuestos</h5>
              <p class="ext-card">Administra los datos y los documentos fiscals de los contribuyentes</p>
            </a>
            <a href="#" class="card-1">
              <MegaphoneIcon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Notificaciones</h5>
              <p class="ext-card">Elige las preferencias de notificación y tu forma de contacto</p>
            </a>
            <a href="#" class="card-1">
              <EyeIcon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Privacidad y uso compartido</h5>
              <p class="ext-card">Administra tus datos personales,
                servicios relacionados y configuraciones de uso compartidos de datos</p>
            </a>
            <a href="#" class="card-1">
              <CogIcon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Preferencias generales</h5>
              <p class="ext-card">Configura tu idioma, moneda y zona horaria</p>
            </a>
            <a href="#" class="card-1">
              <BuildingOffice2Icon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Viaje de trabajo</h5>
              <p class="ext-card">Agrega un correo electrónico laboral para acceder
                a los beneficios para viajes de negocios</p>
            </a>
            <a href="#" class="card-1">
              <ChartBarIcon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Herramientas para anfitriones profesionales</h5>
              <p class="ext-card">Obtén herramientas profesionales si administras
                varias propiedades de Earthbnb</p>
            </a>
            <a href="#" class="card-1">
              <GiftTopIcon className="h-9 w-9 text-black mb-10" />
              <h5 class="int-card">Crédito y cupones de invitaciones</h5>
              <p class="ext-card">Tienes $0 MXN en cupones y créditos de invitaciones. Más información.</p>
            </a>
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
