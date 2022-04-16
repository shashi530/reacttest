import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {
    const [city, setCity] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    const getData = async (data) => {
        const res = await axios.get('http://localhost:8080/cities');
        setCity(res.data[0]);
    }
    // console.log(city.data)

  return (
    <div>
      <h1>Home</h1>
      
      <table border="1px solid black">
          <thead>
              <tr>
                  <td>id</td>
                  <td>Country</td>
                  <td>City</td>
                  <td>Population</td>
                  <td>Edit</td>
                  <td>Delete</td>
              </tr>
          </thead>

          <tbody>
              <tr>
                <td>{city.id}</td>
                <td>{city.country}</td>
                <td>{city.city_name}</td>
                <td>{city.population}</td>
                <td>

                <button>Edit</button>
                </td>
                <td>

                <button>Delete</button>
                </td>
              </tr>
          </tbody>
      </table>
      

    </div>
  )
}
