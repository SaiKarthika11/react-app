import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


export function Productdetails()
{
    const [products, setProduct] = useState([]);
    let params = useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=> {
            setProduct(products=response.data);
        })
    },[])

    return(
        <div>
            <h2>Product Details {params.id} </h2>
            <dl>
                <dt>Title</dt>
                <dd>{products[0].title}</dd>
                <dt>Price</dt>
                <dd>{products[0].price}</dd>
                <dt>Preview</dt>
                <dd>
                    <img  src={products[0].image} width="100" height="100" />
                </dd>
                <dt>Rating</dt>
                <dd>{products[0].rating.rate}</dd>
            </dl>
            <div>
                <Link to={"/products/" + products[0].category}>Back to Products</Link>
            </div>
        </div>
    )
}