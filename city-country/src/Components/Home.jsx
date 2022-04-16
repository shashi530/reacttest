import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Text, Table,  Thead,
    Tbody, Tr, Th, Td, Button,
} from '@chakra-ui/react'


export default function Home() {
    const [city, setCity] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    const getData = async (data) => {
        const res = await axios.get('http://localhost:8080/cities');
        setCity([...res.data]);
    }
    console.log(city);

  return (
    <div>
      <Text>Home</Text>
      
      <Table border="1px solid black">
          <Thead>
              <Tr>
                  <Th>id</Th>
                  <Th>Country</Th>
                  <Th>City</Th>
                  <Th>Population</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
              </Tr>
          </Thead>

          <Tbody>
            {
              city.map(e =>{
              return (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.country}</Td>
                <Td>{e.city_name}</Td>
                <Td>{e.population}</Td>
                <Td>

                <Button>Edit</Button>
                </Td>
                <Td>

                <Button>Delete</Button>
                </Td>
              </Tr>
               )
              })
            } 
          </Tbody>
      </Table>
      

    </div>
  )
}
