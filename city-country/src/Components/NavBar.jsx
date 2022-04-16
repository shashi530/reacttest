import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/addcity">Add City</Link>
      <Link to="/addcountry">Add Country</Link>
    </div>
  )
}
