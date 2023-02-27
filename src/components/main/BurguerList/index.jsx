import { ListaBurguer, List, Imagem } from "./styled"

const BurguerList = ({ burguers, filter, addAlimento }) => {
    return(
        <ListaBurguer>
                {
                    (filter.length > 0 ? filter : burguers).map((elem) => (
                        <List key={elem.id}>
                            <Imagem src={elem.img} alt={elem.name} />
                            <div>
                                <h3>{elem.name}</h3>
                                <p>{elem.category}</p>
                                <span>R$ {elem.price.toFixed(2)}</span>
                                <button onClick={() => addAlimento(elem)}>Adicionar</button>
                            </div>
                        </List>
                    ))
                }
        </ListaBurguer>
    )
}

export default BurguerList