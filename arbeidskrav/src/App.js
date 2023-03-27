import './App.css';
import './css/main.css';

import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  //API
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('james-bond') /*Default på forsiden*/
    
  /*http://www.omdbapi.com/?i=tt3896198&apikey=9ebf19a7*/
  const getMovies = async() => {
      const response = await fetch (`http://www.omdbapi.com/?i=tt3896198&s=${search}&type=movie&apikey=9ebf19a7`)
      const data = await response.json()
      setMovies(data.Search)
      console.log(movies)
  }

  useEffect(() => {
      getMovies()
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout getMovies={getMovies} movies={movies} setSearch={setSearch}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Kilder: kode fra forelesning om matprat og news