import { AiFillStar } from "react-icons/ai"
import './scorerating.css'

export default function scoreRating() {
  return (
    <>

      <div class="flex items-center mt-6 mb-5">
        <AiFillStar class="h-8 w-8 text-dark inline-flex items-center p-1.5" />
        <p class="ml-2 text-xl font-medium text-dark dark:text-dark">5.0</p>
        <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-dark"></span>
        <p class="text-xl font-medium text-dark dark:text-dark">376 reviews</p>
        <a href="#" class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all reviews</a>
      </div>
      <div class="gap-8 sm:grid sm:grid-cols-2">
        <div>
          <dl class="flex flex-row">
            <dt class="flex text-sm font-medium text-gray-500 dark:text-gray-400">Staff</dt>
            <dd class="flex items-center justify-end flex-1 mb-3">
              <div class="w-4/5 bg-gray-200 rounded h-2.5 dark:bg-gray-200 mr-2">
                <div class="bg-gray-900 h-2.5 rounded dark:bg-gray-900" style={{ width: "89%" }}></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
          </dl>
          <dl class="flex flex-row">
            <dt class="flex text-sm font-medium text-gray-500 dark:text-gray-400">Staff</dt>
            <dd class="flex items-center justify-end flex-1 mb-3">
              <div class="w-4/5 bg-gray-200 rounded h-2.5 dark:bg-gray-200 mr-2">
                <div class="bg-gray-900 h-2.5 rounded dark:bg-gray-900" style={{ width: "89%" }}></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
          </dl>
          <dl class="flex flex-row">
            <dt class="flex text-sm font-medium text-gray-500 dark:text-gray-400">Staff</dt>
            <dd class="flex items-center justify-end flex-1 mb-3">
              <div class="w-4/5 bg-gray-200 rounded h-2.5 dark:bg-gray-200 mr-2">
                <div class="bg-gray-900 h-2.5 rounded dark:bg-gray-900" style={{ width: "89%" }}></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Value for money</dt>
            <dd class="flex items-center mb-3">
              <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "89%" }}></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
          </dl>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Cleanliness</dt>
            <dd class="flex items-center mb-3">
              <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "70%" }}></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">7.0</span>
            </dd>
          </dl>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
            <dd class="flex items-center">
              <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "89%" }}></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
          </dl>
        </div>
      </div>

    </>
  )
}
