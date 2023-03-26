import SearchResults from "./SearchResults";

export default function Layout(){
    return(
        <div className="container">
            <header>
                <h1>Filmsøk</h1>
            </header>
            
            <main>
                <SearchResults/>
            </main>
        </div>
    )
}

//Kilder: kode fra forelesning om matprat og news