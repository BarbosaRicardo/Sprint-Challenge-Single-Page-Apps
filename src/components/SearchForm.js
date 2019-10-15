import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch()}>
        <input
          
          
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
