import React from 'react'
import { data } from '../helper/data'
import SingleCard from './SingleCard'
import SearchBar from './SearchBar'
import {Container} from 'react-bootstrap';
import { useState } from 'react';



const AllCards = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => setSearch(e.target.value);

  return (
    <Container fluid > 
      <SearchBar handleChange={handleChange} />

      <div className="card-box">
        {data.filter((player) =>
            player.name.toLowerCase().includes(search.toLowerCase().trim())
          ).map((players) => (
            <SingleCard {...players} />
          ))}
      </div>
 
    </Container>
  );
};

export default AllCards