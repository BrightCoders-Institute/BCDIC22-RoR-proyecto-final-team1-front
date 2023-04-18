import { IoIosArrowForward } from 'react-icons/io'

import './LastDetails.css'

export default function LastDetails() {
  return (
    <>
      <section className="text-dark mb-16">
        <div className="max-w-screen-xl px-4 py-2 sm:py-4 sm:px-6 lg:py-8 lg:px-8">
          <h2 className="text-2xl text-dark font-bold">Que debes de saber</h2>
          <div className="grid grid-cols-1 gap-8 md:mt-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-lg font-bold">Reglas de la casa</h2>
                <p className="mt-2 text-sm">Horario de llegada: de las 13:00 a las 20:00</p>
                <p className="mt-2 text-sm">Salida antes de las 10:00</p>
                <p className="mt-2 text-sm">6 Huespedes como maximo</p>
                <a href="#" className="arrow">Mostrar más <IoIosArrowForward /> </a>

              </div>
            </div>

            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-lg font-bold">Seguridad y propiedad</h2>
                <p className="mt-2 text-sm">Lago, río u otro cuerpo de agua cercano</p>
                <p className="mt-2 text-sm">Estructura para trepar o jugar</p>
                <p className="mt-2 text-sm">Alarma de monóxido de carbono</p>
                <a href="#" className="arrow">Mostrar más... <IoIosArrowForward /> </a>

              </div>
            </div>

            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-lg font-bold">Politica de cancelación</h2>
                <p className="mt-2 text-sm">Si cancelas antes del 27 de jun., recibiras un reembolso parcial.</p>
                <p className="mt-2 text-sm">
                  Consulta la política de cancelación completa del anfritión, que se aplica incluso si cancelas por haber contraído
                  COVID-19 o por cualquier problema relacionado con el coronavirus.
                </p>
                <a href="#" className="arrow">Mostrar más... <IoIosArrowForward /> </a>

              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}