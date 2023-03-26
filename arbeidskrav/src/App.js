import './App.css';
import './css/main.css';

import { useEffect, useState } from 'react';
import Layout from './components/Layout';

function App() {
  //API
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('james-bond') /*Default på forsiden*/
    
  /*http://www.omdbapi.com/?i=tt3896198&apikey=9ebf19a7*/
  const getMovies = async() => {
      const response = await fetch (`http://www.omdbapi.com/?i=tt3896198&s=${search}&apikey=9ebf19a7`)
      const data = await response.json()
      setMovies(data)
      console.log(data)
  }

  useEffect(() => {
      getMovies()
  },[])

  return (
    <Layout getMovies={getMovies} movies={movies} setSearch={setSearch}/>
  );
}

export default App;

//Kilder: kode fra forelesning om matprat og news