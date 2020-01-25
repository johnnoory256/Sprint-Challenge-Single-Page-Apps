import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response => {
      const data = response.data.results;
      const result = data.filter((char) => char.name.includes(query));
      setChars(result);
   
    }))
    .catch(error => {
      console.log('there was a server error', error);
    })
  }, [query, page]);

    const handleQuery = (event) => {
      setQuery(event.target.value);
    }

    return (
      <div>
        <Link to="/"><button>Go Back Home</button></Link>
       
        <h2>Character List</h2>
        {
          chars.map((char, index) => {
            console.log(char, index)
            return <CharacterCard key={index} char={char} />
          })
        }
        
      </div>
    );
  }

