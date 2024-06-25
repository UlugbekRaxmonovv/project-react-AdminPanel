import React, { useState, useEffect } from 'react';
import './Products.css';
import { useGetCategoryQuery, useGetProductsQuery } from '../../context/ProductApi/ProductApi';
import { useSearchParams } from 'react-router-dom';
import Home from '../Home/Home';
import axios from 'axios';
import Modul from '../../components/Modul/Modul';
import SinglRoute from '../../components/SinglRoute/SinglRoute';
import Loading from '../../components/Loading/Loading';
import 
{BsFillBellFill, BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from  'react-icons/bs'
import {useGetSorchProdactQuery} from  '../../context/ProductApi/ProductApi'
import Search from '../../components/Search/Search';

const Api_url = "https://dummyjson.com";

const Products = ({ btn1, btn }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [productDetails, setProductDetails] = useState(null);
    const [category, setCategory] = useState('/');
    const [limit, setLimit] = useState(1);
    const { isError, isLoading, isSuccess, data } = useGetProductsQuery({ params: { limit: 8 * limit },path: category });
    
    const { data: categoryAll } = useGetCategoryQuery();
    const [search,setSearch] = useState(false)
    const [searchall, setSearchAll] = useState(false);
    const [value,setValue] =useState('')
    const {data:data1} = useGetSorchProdactQuery({q:value})
    useEffect(() => {
        if (value.trim()) {
          setSearchAll(true);
        } else {
          setSearchAll(false);
        }
      }, [value]);


    useEffect(() => {
        const id = searchParams.get('details');
        if (id) {
            axios
                .get(`${Api_url}/products/${id}`)
                .then((res) => {
                    setProductDetails(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching product details:', error);
                });
        }
    }, [searchParams]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setLimit(1);
    };

    const removeProductDetails = () => {
        setProductDetails(null);
        setSearchParams({});
    };

    const products = data?.products?.map((product) => (
        <div key={product.id} className="card_all">
            <img
                src={product.images[0]}
                alt={product.name}
                width={200}
                onClick={() => setSearchParams({ details: product.id })}
            />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <h5>${product.price}</h5>
        </div>
    ));

    return (
      <>
          <header className='header' >
            <div className="menu-icon">
            <BsJustify className='icon'/>
            </div>
            <div className="header-left">
            <BsSearch className='icon'  />
         
              
            </div>
            <div className="navbar_sorch">
                        <input 
                        value={value}
                        onFocus={() =>setSearchAll(true)}
                        onBlur={() => {
                          setTimeout(() => setSearchAll(false), 200);
                        }}
                        onChange={(e) => setValue(e.target.value)}
                        type="text" placeholder='Search.........' />
                         <select name="category"   id="category" onChange={handleCategoryChange}>
            <option value="/">All</option>
            {categoryAll?.map((el) => (
                <option key={el}  value={`/category/${el}`}>{el}</option>
            ))}
        </select>
                        {
                            value.trim() &&  searchall ? 
                             <div className="modul_all">
                          <Search data={ data1?.products} />
                            </div>
                            : <></>
                        }
                       
                    </div>
            <div className="header-right">
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
            </div>
           </header>
      
        <div className="main-container">
      
            {isLoading && <Loading count={8} />}
            <div className="wrapper">
                {products}
            </div>
            <div className="btn">
                <div className="btn4">
                    <button onClick={() => setLimit((prev) => prev + 1)}>
                        {isLoading ? <Loading /> : 'Load More'}
                    </button>
                </div>
            </div>
            {productDetails && (
                <Modul btn1={removeProductDetails}>
                    <SinglRoute detail={productDetails} />
                </Modul>
            )}
          
        </div>
      
      </>
    );
};

export default Products;
