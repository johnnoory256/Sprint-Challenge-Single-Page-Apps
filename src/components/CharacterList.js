import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const CharListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    }
    h2 {
        margin-top: 5%;
        font-size: 2rem;
    }
    button {
        color: #FFFFFF;
        font-size: 1.4rem;
        font-weight: bold;
        background: #222937;
        height: 4rem;
        width: 25rem;
        border: none;
        border-radius: 0.5rem;
        transition: all 1s;
        margin: 2rem 0;
        &:hover {
            transition: color, background 1s;
            background: #EBE2C1;
            color: #222937;
            cursor: pointer;
        }
    }
`;

export default function CharacterList() {

  const [chars, setChars] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        const data = res.data.results;
        const result = data.filter((char) => char.name.includes(query));
        setChars(result);
      })
      .catch((err) => {
        console.log(`There was an error: `, err);
      })
  }, [query, page]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  return (
    <CharListContainer>
      <Link to="/"><button>Go Back Home</button></Link>
      <SearchForm chars={chars} query={query} setQuery={setQuery} handleQuery={handleQuery} />
      <h2>Character List</h2>
      {
        chars.map((char, index) => {
          
          return <CharacterCard key={index} char={char} />
        })
      }
      
    </CharListContainer>
  );
}