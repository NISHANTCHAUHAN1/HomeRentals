import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa"
const ListingCard = ({
  listingId,
  creator,
  listingPhotoPaths,
  city,
  state,
  country,
  category,
  type,
  price,
  booking,
  startDate,
  endDate,
  totalPrice,
}) => {
  // const [currentIndex, setCurrentIndex] = useState(0)



  return (
    <div
      className="relative cursor-pointer p-2.5 rounded-lg hover:shadow-lg w-72"
      onClick={() => {
        navigate(`/listings/${listingId}`)
      }}
    >
      <div className="w-72 overflow-hidden rounded-lg mb-2.5">
        <div
          className="flex w-full items-center transition-transform duration-500 ease-in-out"
        >
          {listingPhotoPaths?.map((photo, index) => (
            <div
              className="relative flex-none w-full h-64 flex items-center"
              key={index}
            >
              <img
                src={`http://localhost:3000/${photo?.replace("public", "")}`}
                alt=""
                className="w-full h-full brightness-90"
              />
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-700 ">
        {city}, {state}, {country}
      </h3>
      <p className="text-base text-slate-700">{category}</p>
    </div>
  )
}

export default ListingCard
