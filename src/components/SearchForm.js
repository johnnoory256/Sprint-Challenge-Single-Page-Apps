import React from "react";
import styled from "styled-components";

export default function SearchForm(props) {
 
  const { query, setQuery, handleQuery } = props;
  return (
    <section className="search-form">
     <form>
       <label htmlFor="seach">Search Characters:</label>
       <input type="text" name="search" id="seach" value={query} onChange={handleQuery} />
     </form>
    </section>
  );
}
