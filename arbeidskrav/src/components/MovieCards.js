import { useEffect, useState } from "react"

export default function MovieCards(){
    
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('james-bond') /*Default på forsiden*/
    
    const getMovies = async() => {
        const response = await fetch (`http://www.omdbapi.com/?q=${search}&pageSize=10&i=tt3896198&apikey=9ebf19a7`)
        const data = await response.json()
        setMovies(data)
        console.log(data)
    }

    useEffect(() => {
        getMovies()
    },[])

    return
}