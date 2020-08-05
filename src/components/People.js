import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';


const fetchPeople = async () =>{
  const res = await fetch('http://swapi.dev/api/people/');
  return res.json();
}
const People = () => {
  const { data, status } = useQuery('people', fetchPeople);
  console.log(data)
  return (
      <div>
        <h1>People</h1>
        <p></p>
        {status === 'loading' && (
          <div>Loading Data...</div>
        )}
        {status === 'error' && (
          <div>Error Fetching Data</div>
        )}
        {status === 'success' && (
          <div>
            {data.results.map(person => <Person key={person.name} person={person} /> )}
          </div>
        )}
      </div>

  );
}

export default People;
