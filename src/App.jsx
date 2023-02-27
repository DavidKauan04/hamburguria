import Lottie from 'lottie-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react';
import animationBurguer from './animations/loading.json'
import Header from './components/header';
import MainPage from './components/main';
import { api } from './servers/Api';

import { ContainerAnimation, DivAnimation } from './style/styled';

import GlobalStyle from './style/Global';


function App() {

  const notificacaoSucesso = (menssagem) => toast.success(menssagem)
  const notificacaoError = (menssagem) => toast.error(menssagem)

  const [loading, setLoading] = useState(false)

  const [burguers, setBurguers] = useState([])
  const [filter, setFilter] = useState([])
  const [productsCart, setProductsCart] = useState([])
  
  const [search, setSearch] = useState('')

  useEffect(() => {
    setLoading(true)
    async function getBurgues() {
      try {
        const response = await api.get('products')
        setBurguers(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getBurgues()

  }, [])

  function handleSearch(e) {
    e.preventDefault();
    const newFilter = burguers.filter(burguer => burguer.name.match(search));
    setFilter(newFilter)
  }

  function addAlimento(alimento) {
    if (productsCart.find((elem) => elem.name === alimento.name)) {
      notificacaoError('O item já está no carrinho!')
    } else {
      setProductsCart([...productsCart, alimento])
      notificacaoSucesso('Adicionado Com Sucesso!')
    }
  }

  return (
    <div className="App">
      <GlobalStyle />
      {
        loading === true 
        ? <ContainerAnimation>
            <DivAnimation>
              <Lottie 
              animationData={animationBurguer} 
              loop={true}
              />
              <h4>AGUARDE...</h4>
            </DivAnimation>
        </ContainerAnimation>
        : <>
            <Header handleSearch={handleSearch} search={search} setSearch={setSearch} />
            <MainPage burguers={burguers} filter={filter} setBurguers={setBurguers} setFilter={setFilter} productsCart={productsCart} setProductsCart={setProductsCart} addAlimento={addAlimento} />
            <ToastContainer position="bottom-right" reverseOrder={false} />
          </>
      }
    </div>
  );
}

export default App;
