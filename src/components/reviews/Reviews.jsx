import { IoIosArrowForward } from "react-icons/io"

import './reviews.css'

export default function reviews() {
  return (
    <>
      <article className="mt-6 mb-20 gap-x-28 gap-y-5 sm:grid sm:grid-cols-2 px-8">

        {(() => {

          const array = [];
          for (let i = 0; i < 6; i++) {
            array.push(

              <div>
                <div className="flex items-center mb-4 space-x-4">
                  <img className="w-10 h-10 rounded-full" src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" alt="" />
                  <div className="space-y-1 font-medium dark:text-dark">
                    <p className="text-lg font-bold">Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">August 2014</time></p>
                  </div>
                </div>
                <p className="mb-2 mt-6 font-light text-dark dark:text-dark">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                <p className="mb-3 font-light text-dark dark:text-dark">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                <a href="#" className="flex flex-row justify-start items-center mb-5 text-lg font-bold text-dark hover:underline dark:text-dark">Mostrar más <IoIosArrowForward /> </a>
              </div>

            );
          }
          return array;

        })()}

      </article>

    </>
  )
}
