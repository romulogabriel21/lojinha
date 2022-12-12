import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CartShopping from './pages/cart-shop/CartShopping'
import Header from './pages/header/Header'
import Home from './pages/homee/Home'
import Footer from './pages/footer/Footer'
import SearchRes from './pages/searchResult/SearchRes'
import MainHome from './pages/main-home/MainHome'

const App = () => {
  return (
        <Router >
        <Header />
            <Routes >
                <Route path='/' element={<MainHome />} />
                <Route path='/cam_ass' element={<Home category={'MLB1039'} titleH2='Câmeras e Asessórios:' />} />
                <Route path='/cel_tel' element={<Home category={'MLB1051'} titleH2='Celulares e Telefones:' />} />
                <Route path='/elet_audio_video' element={<Home category={'MLB1000'} titleH2='Eletrônicos, Áudios e vídeos:' />} />
                <Route path='/games' element={<Home category={'MLB1144'} titleH2='Games:' />} />
                <Route path='/eletrodomesticos' element={<Home category={'MLB5726'} titleH2='Eletrodomésticos:' />} />
                <Route path='/cart' element={<CartShopping />} />
                <Route path='/search_res' element={<SearchRes />} />
            </Routes >
        <Footer />
        </Router >
  )
}

export default App