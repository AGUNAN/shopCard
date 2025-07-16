import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
// import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    // const [searchParams, setSearchParams] =  useSearchParams()

    useEffect(() => {
        fetch(' http://localhost:3000/api/product')
        .then(res => res.json())
        .then( res => setProducts(res.product))
    },[])

    

    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard product={product} />)} 
        </div>
        </section>
    </Fragment>
}