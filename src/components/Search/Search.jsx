import React from 'react';
import './Search.css'
import { Link } from 'react-router-dom';

const Search = ({data}) => {

let links =data?.map((inx)=>(
    <div key={inx.id}>
   <Link to={`/product/:id`}>
   <img src={inx.images[0]} width={50} alt="" />
   <span>{inx.title}</span>
   </Link>
   </div>
)
)
    return (
        <div>
            {links}
        </div>
    );
}

export default Search;
