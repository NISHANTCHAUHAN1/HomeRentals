import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";

const WishList = () => {
  const wishList = useSelector((store) => store?.user?.wishList);
  // console.log(wishList);

  return (
    <>
      <Navbar />

      <h1 className="text-2xl font-bold text-slate-700 my-10 mx-[100px] sm:mx-12">
        Your Wish List
      </h1>

      <div className="px-24 pb-28 flex justify-center flex-wrap gap-6">
        {wishList.length > 0 ? (
          wishList?.map(
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
          )
        ) : (
          <>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcKcoquPvJ-O9WfgEYiUF34hYhzaGcrtamQ&s"
                alt=""
              />
              <h1 className="text-2xl mt-10 text-center text-sky-600">Not Found WishList</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WishList;
