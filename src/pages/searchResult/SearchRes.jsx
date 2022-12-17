import { useCallback } from 'react'
import { useMemo } from 'react'
import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../card/Card'


const SearchRes = () => {

  const arrayProducts = useMemo(() => [], [])

  const [products, setProducts] = useState([])

  const [searchParams] = useSearchParams()

  const categories = useMemo(() => ['MLB1039', 'MLB1051', 'MLB1000', 'MLB1144', 'MLB5726'], [])

  const query = searchParams.get('q')
  
  const urlSearch = 'https://api.mercadolibre.com/sites/MLB/search?category='

  const getSearch = useCallback(async(url, productCategories) => {
    const res = await fetch(url + productCategories)
    const data = await res.json()

    arrayProducts.push(data.results)

    setProducts(arrayProducts)
  }, [arrayProducts])
  
  
  useEffect(() => {
    categories.map((categorie) => getSearch(urlSearch, categorie))

  }, [query, getSearch, categories])

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