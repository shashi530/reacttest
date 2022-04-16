import React from 'react'
import { Route, Routes} from "react-router-dom"
import AddCity from './AddCity'
import AddCountry from './AddCountry'
import NavBar from './NavBar'
import Home from './Home'

export default function Routers() {
  return (
    <div>
        <NavBar/>
      <Routes>
      <Route path={"/"} element={<Home />}/>
        <Route path={"/addcity"} element={<AddCity />}/>
        <Route path={"/addcountry"} element={<AddCountry/>}/>
      </Routes>

    </div>
  )
}
