import './Header.css'
import { Link } from 'react-router-dom'

import { FaShopify } from 'react-icons/fa'
import Search from '../search/Search'

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <Link to='/'>
          <div className='logo-icon'>
            <FaShopify className='icon-shop' />
            <h1>N<span>3</span>t<i>Shop</i></h1>
          </div>
        </Link>

        <div className='search-form'>
          {/* <Link to='/cart' >
            <ImCart className='cart-shopping' />
          </Link> */}
          <Search />
        </div>
      </div>


      <ul className='pages'>
        <Link to='/cam_ass'>
          <li>Câmeras e Asessórios</li>
        </Link>
        <Link to='/cel_tel'>
          <li>Celulares e Telefones</li>
        </Link>
        <Link to='elet_audio_video'>
          <li>Eletrônicos, Áudios e vídeos</li>
        </Link>
        <Link to='games'>
          <li>Games</li>
        </Link>
        <Link to='eletrodomesticos'>
          <li>Eletrodomésticos</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header