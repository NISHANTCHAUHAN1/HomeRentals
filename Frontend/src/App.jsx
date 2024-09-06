import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import CreateListing from "./pages/CreateListing"
import ListingDetails from "./pages/ListingDetails"
import TripList from "./pages/TripList"
import WishList from "./pages/WishList"
import Properties from "./pages/Properties"
import Reservation from "./pages/Reservation"
import CategoryPage from "./pages/CategoryPage"
import SearchPage from "./pages/SearchPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/listings/:listingId" element={<ListingDetails />} />
        <Route path="/listings/category/:category" element={<CategoryPage />} />
        <Route path="/listings/search/:search" element={<SearchPage />} />
        <Route path="/:userId/trips" element={<TripList />} />
        <Route path="/:userId/wishList" element={<WishList />} />
        <Route path="/:userId/properties" element={<Properties />} />
        <Route path="/:userId/reservations" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
