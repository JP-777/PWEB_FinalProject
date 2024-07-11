import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (query) {
      // Realizar la búsqueda en la base de datos usando CGI y Perl
      fetch(`/cgi-bin/search.pl?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => setResults(data))
        .catch(error => console.error('Error fetching search results:', error));
    }
  }, [location.search]);

  return (
    <div>
      <h1>Search Results</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.productName}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
