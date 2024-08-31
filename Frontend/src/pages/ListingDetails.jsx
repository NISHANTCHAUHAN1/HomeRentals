import React from 'react'
import Navbar from '../components/Navbar'

const ListingDetails = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 py-10 lg:px-12">
        <div className="flex justify-between items-center sm:flex-col sm:items-start sm:gap-4">
          <h1 className="text-2xl font-bold text-slate-700">
            title 
          </h1>
        </div>
      </div>
    </>
  )
}

export default ListingDetails
