import React from 'react';
import './Footer.css'
import { ChevronUpIcon } from "@heroicons/react/24/outline";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function footer() {
  return (
    <footer className="bg-red-200 footer-bottom">
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className='align-left'>
              <p>© 2023 Airbnb, Inc. · Privacidad · Términos · Mapa del sitio · Información de la compañía</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className='flex justify-end'>
              <p>Español (MX) · $ MXN · Ayuda y recursos</p>
              <ChevronUpIcon className="h-6 w-6 text-gray-500"/> 
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
