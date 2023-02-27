import Lottie from 'lottie-react'
import cartAnimation from '../../../animations/cart.json'
import trashAnimation from '../../../animations/trash.json'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { Cart, Products, TitleCart, PriceAndRemove } from "./styled"

const CardProducts = ({ productsCart, setProductsCart }) => {

    const notify = (menssagem) => toast.success(menssagem)

    function RemoveAliment(currentAliment) {
        const newProducts = productsCart.filter((aliment) => aliment !== currentAliment)
        setProductsCart(newProducts)
    }
    const total = productsCart.reduce((acc, atl) => acc+atl.price, 0)

    return(
        <>
            <Cart>
                <TitleCart>
                    <h4>Carrinho de compras</h4>
                </TitleCart>
                <Products>
                    {
                        productsCart.length === 0 
                        ?   <div>
                                <Lottie 
                                    animationData={cartAnimation}
                                    loop={true}
                                />
                            </div>
                        :   productsCart.map(elem => (
                            <li key={elem.id} className='liCart'>
                                <img src={elem.img} alt={elem.name} />
                                <div>
                                    <p>{elem.name}</p>
                                    <span>{elem.category}</span>
                                </div>
                                <button type='button' onClick={() => {
                                    RemoveAliment(elem)
                                    notify('Item removido com sucesso')
                                    }} ><Lottie animationData={trashAnimation}/></button>
                            </li>
                        ))
                    }
                </Products>
                {
                    total > 0 && <PriceAndRemove>
                    <div>
                        <p>Total</p>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <button onClick={() => {
                        setProductsCart([])
                        notify('Itens Removidos Com Sucesso!')
                    }}>Remover Todos</button>
                </PriceAndRemove>
                }
                
            </Cart>
        </>
    )
}

export default CardProducts;