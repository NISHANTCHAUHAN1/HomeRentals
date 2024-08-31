import React, { useEffect, useState } from "react"
import { categories } from "../data"
import { useDispatch, useSelector } from "react-redux"
import ListingCard from "./ListingCard"
import { setListings } from "../redux/listingSlice"

const Listings = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const listings = useSelector((state) => state?.listings?.listings)
  const dispatch = useDispatch();
  const getListings = async () => {
    try {
      const res = await fetch(
        selectedCategory !== "All"
          ? `http://localhost:3000/api/listing?category=${selectedCategory}`
          : "http://localhost:3000/api/listing",
        {
          method: "GET",
        }
      )
      const data = await res.json()
      dispatch(setListings({ listings: data }))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getListings()
  }, [selectedCategory])

  return (
    <>
      <div className="px-20 py-12 md:px-5 flex justify-center flex-wrap gap-14">
        {categories.map((category, index) => (
          <div
            className={`flex flex-col items-center text-slate-900 cursor-pointer `}
            key={index}
            onClick={() => setSelectedCategory(category.label)}
          >
            <div
              className={`text-2xl ${
                category.label === selectedCategory ? "text-red-500" : ""
              }`}
            >
              {category.icon}
            </div>

            <p
              className={`text-lg font-bold ${
                category.label === selectedCategory ? "text-red-500" : ""
              }`}
            >
              {category.label}
            </p>
          </div>
        ))}
      </div>

      <div className="px-12 pb-32 lg:px-5 flex flex-wrap justify-center gap-5">
        {listings.length > 0 &&
          listings.map(
            ({
              _id,
              creator,
              listingPhotoPaths,
              city,
              state,
              country,
              category,
              type,
              price,
              booking = false,
            }) => (
              <ListingCard
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                city={city}
                state={state}
                country={country}
                category={category}
                type={type}
                price={price}
                booking={booking}
              />
            )
          )}
      </div>
    </>
  )
}

export default Listings
