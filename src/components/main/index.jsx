import BurguerList from "./BurguerList";
import CardProducts from "./CardProducts";

import { MainContainer } from "./styled";


const MainPage = ({ burguers, filter, setBurguers, setFilter, productsCart, setProductsCart, addAlimento }) => {
    return (
        <MainContainer>
            <BurguerList burguers={burguers} filter={filter} addAlimento={addAlimento} />
            <CardProducts productsCart={productsCart} setProductsCart={setProductsCart} />
        </MainContainer>
    )
}

export default MainPage;