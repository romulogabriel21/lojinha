import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "../card/Card"
import './Home.css'

const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?category='

const Home = ({category, titleH2}) => {

    const [products, setProduct] = useState([])
    
    const getData = async(url) => {
        const response = await fetch(url)

        const data = await response.json()

        setProduct(data.results)
    }

    useEffect(() => {
       getData(urlApi + category)
    }, [category])

  return (
    <>
    {products.length === 0 && <h2>Carregando...</h2>}
    {products.length > 0 &&
        <>
            <h2>{titleH2}</h2>
            <div className="container" >
                {
                    products.map((product) => 
                    <a target='_blank' href={product.permalink} key={product.id} to={`/product_details/${product.id}`} className="link-card" >
                        <Card
                                image={product.thumbnail}
                                title={product.title}
                                price={product.price} />
                    </a >
                    )
                }
            </div>
        </>
    }
    </>
    )
}

export default Home