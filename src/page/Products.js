import { useEffect, useState } from "react"
import Card from "../component/Card"

// fetching api resource- products

function Product(){                //  for create components
    const [products, setProducts] = useState([{
        "id": 1,
       "title": "",
       "images":[
        "https://picsum.photos/640/640?r=7507",
       ]
    }])
    // function to get data from api
    const getProducts = () => {
        fetch ("https://api.escuelajs.co/api/v1/products")
        .then(resp => resp.json())
        .then(resp => setProducts(resp))
    }
    // when page load
    useEffect(() => {
        getProducts()
        // log product
    }, [])  //use​ it for កំុដោយ useEffect​ វា Effect រហូត 
    return(
        <div className="container mt-5">
            <h1>Top Product</h1>
            <div className="row g-3">
            {
               products && products.map(product => (
                <div className='col-12 col-sm-6 col-md-3'>
                    <Card title={product.title} thumnail={product.images[0]}/>
                </div>
               ))
            }
        </div>
        </div>

    )
}
export default Product;