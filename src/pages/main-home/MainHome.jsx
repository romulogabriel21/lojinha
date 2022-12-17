import {useState, useEffect, useCallback, useMemo} from 'react'
import Card from '../card/Card'

const MainHome = () => {

  const arrayProducts = useMemo(() => [], [])

  const [products, setProducts] = useState([])

  const categories = useMemo(() => (['MLB1039', 'MLB1051', 'MLB1000', 'MLB1144', 'MLB5726']), [])
  
  const urlSearch = 'https://api.mercadolibre.com/sites/MLB/search?category='

  const getSearch = useCallback( async (url, productCategorie) => {
      const res = await fetch(url + productCategorie)
      const data = await res.json()
  
      arrayProducts.push(data.results)

      setProducts(arrayProducts)

  }, [arrayProducts])
  
  
  useEffect(() => {
    categories.forEach((categorie) => getSearch(urlSearch, categorie))
  }, [getSearch, categories])

  return (
    <>
    {products.length === 0 && <h2>Carregando...</h2>}

    {products.length > 0 &&
        <>
            <h2 className='title'>Bem Vindo!</h2>
            <p>Loja em Parceria com Mercado Livre</p>
            <div className="container" >
                {      
                    products.map((arrayProduct) => arrayProduct.map((product) => {
                        return <a href={product.permalink} key={product.id} to={`/product_details/${product.id}`} className='link-card' >
                              <Card 
                                  image={product.thumbnail} 
                                  title={product.title} 
                                  price={product.price} />
                            </a>
                      }))

                }
            </div>
        </>
    }
    </>
  )
}

export default MainHome