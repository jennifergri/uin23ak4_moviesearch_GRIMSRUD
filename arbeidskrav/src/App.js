import './App.css';
import './css/main.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('james-bond') /*Default på forsiden*/
    
  const getMovies = async() => {
      const response = await fetch (`http://www.omdbapi.com/?s=${search}&type=movie&apikey=9ebf19a7`)
      /*OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=9ebf19a7*/
      /*API parameter: https://www.omdbapi.com*/
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

//Kilder: Gitcollab og News kode
//Samarbeidet med Stine og Marianne