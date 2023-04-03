import { IoIosArrowForward } from "react-icons/io"
import moment from 'moment';

import './reviews.css'

export default function reviews({ details }) {
  return (
    <>
      <article className="mt-6 mb-20 gap-x-28 gap-y-5 sm:grid sm:grid-cols-2 px-8">
        {details.reviews.map((review) => {
          const formattedDate = moment(review.created_at).format('DD/MM/YYYY');
          return <div key={review.id}>
            <div className="flex items-center mb-4 space-x-4">
              <img className="w-10 h-10 rounded-full" src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" alt="" />
              <div className="space-y-1 font-medium dark:text-dark">
                <p className="text-lg font-bold">{review.author} <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">{formattedDate}</time></p>
              </div>
            </div>
            <p className="mb-2 mt-6 font-light text-dark dark:text-dark">
              {review.comment}
            </p>
            <a href="#" className="flex flex-row justify-start items-center mb-5 text-lg font-bold text-dark hover:underline dark:text-dark">Mostrar más <IoIosArrowForward /> </a>
          </div>
        })}
      </article>
    </>
  )
}
