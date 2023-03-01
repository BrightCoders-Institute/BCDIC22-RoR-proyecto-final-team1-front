import React from 'react';
import './Footer.css'
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function footer() {
  return (
    <footer className="bg-light py-3 footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>© 2023 Airbnb, Inc. · Privacidad · Términos · Mapa del sitio · Información de la compañía</p>
            </div>
            <div className="col-md-6">
              <p>Español (MX) · $ MXN · Ayuda y recursos</p>
            </div>
          </div>
        </div>
      </footer>
    );
}
