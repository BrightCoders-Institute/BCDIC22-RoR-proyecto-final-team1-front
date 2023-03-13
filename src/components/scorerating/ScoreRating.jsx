import { AiFillStar } from "react-icons/ai"
import './scorerating.css'

export default function scoreRating() {
  return (
    <>

      <div class="flex items-center mt-6 mb-5 px-8  gen-score">
        <AiFillStar class="h-8 w-8 text-dark inline-flex items-center p-1.5" />
        <p class="ml-2 text-xl font-medium text-dark dark:text-dark">5.0</p>
        <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-dark"></span>
        <p class="text-xl font-medium text-dark dark:text-dark">376 reviews</p>
      </div>
      <div class="gap-28 sm:grid sm:grid-cols-2 px-8 scores">
        <div>
          <dl class="flex flex-row">
            <dt class="flex flex-1 text-lg font-medium text-dark dark:text-dark">Limpieza</dt>
            <dd class="flex items-center justify-end flex-1 mb-3">
              <div class="w-2/5 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                <div class="bg-gray-900 h-1 rounded dark:bg-gray-900" style={{ width: "89%" }}></div>
              </div>
              <span class="text-lg font-medium text-dark dark:text-dark">8.8</span>
            </dd>
          </dl>
          <dl class="flex flex-row">
            <dt class="flex flex-1 text-lg font-medium text-dark dark:text-dark">Comunicación</dt>
            <dd class="flex items-center justify-end flex-1 mb-3">
              <div class="w-2/5 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                <div class="bg-gray-900 h-1 rounded dark:bg-gray-900" style={{ width: "89%" }}></div>
              </div>
              <span class="text-lg font-medium text-dark dark:text-dark">8.8</span>
            </dd>
          </dl>
          <dl class="flex flex-row">
            <dt class="flex flex-1 text-lg font-medium text-dark dark:text-dark">Llegada</dt>
            <dd class="flex items-center justify-end flex-1 mb-3">
              <div class="w-2/5 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                <div class="bg-gray-900 h-1 rounded dark:bg-gray-900" style={{ width: "89%" }}></div>
              </div>
              <span class="text-lg font-medium text-dark dark:text-dark">8.8</span>
            </dd>
          </dl>
        </div>
        <div>
          <dl class="flex flex-row">
            <dt class="flex flex-1 text-lg font-medium text-dark dark:text-dark">Precisión</dt>
            <dd class="flex items-center justify-end flex-1 mb-3">
              <div class="w-2/5 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                <div class="bg-gray-900 h-1 rounded dark:bg-gray-900" style={{ width: "89%" }}></div>
              </div>
              <span class="text-lg font-medium text-dark dark:text-dark">8.8</span>
            </dd>
          </dl>
          <dl class="flex flex-row">
            <dt class="flex flex-1 text-lg font-medium text-dark dark:text-dark">Ubicación</dt>
            <dd class="flex items-center justify-end flex-1 mb-3">
              <div class="w-2/5 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                <div class="bg-gray-900 h-1 rounded dark:bg-gray-900" style={{ width: "89%" }}></div>
              </div>
              <span class="text-lg font-medium text-dark dark:text-dark">8.8</span>
            </dd>
          </dl>
          <dl class="flex flex-row">
            <dt class="flex flex-1 text-lg font-medium text-dark dark:text-dark">Calidad-Precio</dt>
            <dd class="flex items-center justify-end flex-1 mb-3">
              <div class="w-2/5 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                <div class="bg-gray-900 h-1 rounded dark:bg-gray-900" style={{ width: "89%" }}></div>
              </div>
              <span class="text-lg font-medium text-dark dark:text-dark">8.8</span>
            </dd>
          </dl>
        </div>
      </div>

    </>
  )
}
