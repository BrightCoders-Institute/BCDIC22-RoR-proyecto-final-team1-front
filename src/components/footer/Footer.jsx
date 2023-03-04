import React from 'react';
import './Footer.css'
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function footer() {
  return (
    <footer className="footer-bottom">
      <div className='row'>
        <div className='col-md-6'>
        <p className='flex data-f-1'>© 2023 Airbnb, Inc. · Privacidad · Términos · Mapa del sitio · Información de la compañía</p>
        </div>
        <div className='col-md-6'>
          <p className='flex data-f-2'>
            <GlobeAltIcon class="up-icon h-6 w-6 text-black-500" />
            Español(MX) $ MXN Ayuda y recursos
            <ChevronUpIcon className="up-icon h-5 w-5 text-black-500"/></p>
        </div>
      </div>
    </footer>
  );
}
