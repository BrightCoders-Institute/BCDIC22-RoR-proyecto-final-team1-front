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
          <p className='flex data-f-1'>
            © 2023 EarthBnD, Inc. · 
            <button className='margin-b'>Privacidad</button> 
            · 
            <button className='margin-b'>Términos</button> 
            · 
            <button className='margin-b'>Mapa del sitio</button>
            · 
            <button className='margin-c'>Información de la compañía</button>
          </p>
        </div>
        <div className='col-md-6'>
          <p className='flex data-f-2'>
            <button className='margin-a'><GlobeAltIcon class="h-5 w-6 text-black-500" /></button>
            <button className='margin-b'> Español (MX) </button>
            <button className='margin-b'> $ MXN </button> 
            <button className='margin-b'> Ayuda y recursos </button>
            <button><ChevronUpIcon className="up-icon h-6 w-5 text-black-500"/></button>
          </p>
        </div>
      </div>
    </footer>
  );
}