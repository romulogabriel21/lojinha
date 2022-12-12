import { useMemo } from 'react'
import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../card/Card'


const SearchRes = () => {

  const arrayProducts = []

  const [products, setProducts] = useState([])

  const [searchParams] = useSearchParams()

  const categorys = useMemo(['MLB1039', 'MLB1051', 'MLB1000', 'MLB1144', 'MLB5726'],[])

  const query = searchParams.get('q')
  
  const urlSearch = 'https://api.mercadolibre.com/sites/MLB/search?category='

  const getSearch = async(url, productCategory) => {
    const res = await fetch(url + productCategory)
    const data = await res.json()

    arrayProducts.push(data.results)

    setProducts(arrayProducts)
  }
  
  
  useEffect(() => {
    categorys.map((category) => getSearch(urlSearch, category))

  }, [getSearch, categorys])

  return (
    <>
    {products.length === 0 && <h2>Carregando...</h2>}
    {products.length > 0 &&
        <>
            <h2 className='title'>Resultado da Busca: <span className="query">{query}</span></h2>
            <div className="container" >
                {
                    products.map((arrayProduct) => {
                      return arrayProduct.map((product) => {
                        const run = () => {
                          var title = product.title.toLowerCase()
                          if (title.match(query.toLowerCase())) {
                            return <a href={product.permalink} to={'/product_details'} key={product.id} className='link-card' >
                              <Card 
                                image={product.thumbnail} 
                                title={product.title} 
                                price={product.price} />
                            </a>
                            
                          }
                      }
                      return run()
                      })
                    }) 
                }
            </div>
        </>
    }
    </>
  )
}

export default SearchRes