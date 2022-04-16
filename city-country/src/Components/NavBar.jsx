import React from 'react'
import { Link } from '@chakra-ui/react';

export default function NavBar() {

  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/addcity">Add City</Link>
      <Link href="/addcountry">Add Country</Link>
    </div>
  )
}
