import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    form {
        label {
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
        input {
          height: 1.2rem;
          width: 11rem;
          border: 1px solid ; 
          border-radius: 0.2rem;
        }
    }
`;

export default function SearchForm(props) {

  const { query, setQuery, handleQuery } = props;

  return (
    <SearchContainer>
      <form>
        <label htmlFor="search">Search Characters:</label>
        <input type="text" name="search" id="search" value={query} onChange={handleQuery} />
      </form>
    </SearchContainer>
  );
}