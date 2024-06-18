import React from 'react';
import './Products.css'
import {useGetProductsQuery} from '../../context/ProductApi/ProductApi'

const Products = () => {
    const {isError,isLoading,isSuccess,data} = useGetProductsQuery()
    let products = data?.products?.map((product) =>(
        <div key={product.id} className="card_all">
            <img src={product.images[0]} alt={product.name}  width={200}/>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
        </div>
    ))
    return (
        <div className="main-container">
            <div className="wrapper">
               {products}
            </div>
        </div>
    );
}

export default Products;
