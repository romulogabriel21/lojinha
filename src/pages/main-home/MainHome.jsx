import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card'

const MainHome = () => {

  const arrayProducts = []

  const [products, setProducts] = useState([])

  const categorys = ['MLB1039', 'MLB1051', 'MLB1000', 'MLB1144', 'MLB5726']
  
  const urlSearch = 'https://api.mercadolibre.com/sites/MLB/search?category='

  const getSearch = async(url, productCategory) => {
    const res = await fetch(url + productCategory)
    const data = await res.json()

    arrayProducts.push(data.results)

    setProducts(arrayProducts)
  }
  
  
  useEffect(() => {
    categorys.map((category) => getSearch(urlSearch, category))
    console.log(products);
  }, [])

  return (
    <>
    {products.length === 0 && <h2>Carregando...</h2>}
    {products.length > 0 &&
        <>
            <h2 className='title'>Bem Vindo!</h2>
            <p>Loja em Parceira com Mercado Livre</p>
            <div className="container" >
                {
                    products.map((arrayProduct) => {
                      return arrayProduct.map((product) => {
                        return <a href={product.permalink} key={product.id} to={`/product_details/${product.id}`} className='link-card' >
                              <Card 
                                  image={product.thumbnail} 
                                  title={product.title} 
                                  price={product.price} />
                            </a>
                      })
                    }) 
                }
            </div>
        </>
    }
    </>
  )
}

export default MainHome