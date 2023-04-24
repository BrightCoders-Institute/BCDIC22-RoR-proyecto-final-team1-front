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


function Tarjetas() {
  const cards = [
    {
      id: 1,
      icono: <IdentificationIcon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Información Personal',
      body: 'Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo',
    },
    {
      id: 2,
      icono: <ShieldCheckIcon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Inicio de sesión y seguridad',
      body: 'Actualiza tu contraseña y protege tu cuenta',
    },
    {
      id: 3,
      icono: <BanknotesIcon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Pagos y cobros',
      body: 'Revisa pagos, cobros, cupones y tarjetas de regalo',
    },
    {
      id: 4,
      icono: <DocumentIcon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Impuestos',
      body: 'Administra los datos y los documentos fiscals de los contribuyentes',
    },
    {
      id: 5,
      icono: <MegaphoneIcon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Notificaciones',
      body: 'Elige las preferencias de notificación y tu forma de contacto',
    },
    {
      id: 6,
      icono: <EyeIcon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Privacidad y uso compartido',
      body: 'Administra tus datos personales, servicios relacionados y configuraciones de uso compartidos de datos',
    },
    {
      id: 7,
      icono: <CogIcon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Preferencias generales',
      body: 'Configura tu idioma, moneda y zona horaria',
    },
    {
      id: 8,
      icono: <BuildingOffice2Icon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Viaje de trabajo',
      body: 'Agrega un correo electrónico laboral para acceder a los beneficios para viajes de negocios',
    },
    {
      id: 9,
      icono: <ChartBarIcon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Herramientas para anfitriones profesionales',
      body: 'Obtén herramientas profesionales si administras varias propiedades de Earthbnb',
    },
    {
      id: 10,
      icono: <GiftTopIcon className="h-9 w-9 text-black mb-10" />,
      titulo: 'Crédito y cupones de invitaciones',
      body: 'Tienes $0 MXN en cupones y créditos de invitaciones. Más información.',
    },
  ];

  return (
    cards.map((card) => (
        <a key={card.id} href="#" class="card-1">
          {card.icono}
          <h5 class="int-card">{card.titulo}</h5>
          <p class="ext-card">{card.body}</p>
        </a>
    ))
  );
}

export default Tarjetas;
