import { Cabecalho } from "./styled"

const Header = ({ handleSearch, search, setSearch }) => {

    

    return (
        <header>
            <Cabecalho>
                <h1>Burguer <span>Kenzie</span></h1>
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="Nome do produto" value={search} onChange={(e) => setSearch(e.target.value) } />
                    <button type="submit">Pesquisar</button>
                </form>
            </Cabecalho>
        </header>
    )
}

export default Header;