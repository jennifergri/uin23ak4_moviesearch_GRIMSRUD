export default function SearchResults(){
    
    //funksjon som gjør at siden ikke skal refreshe seg:
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="søk etter film..."/>
            <button type="submit">Søk</button>
        </form>
    )
}

//Kilder: kode fra forelesning om matprat