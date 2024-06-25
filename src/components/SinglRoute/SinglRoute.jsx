import React from 'react';
import './SinglRoute.css'

const SinglRoute = ({detail}) => {
    return (
        <div>
                <div className="singli">
                <div className="singli_rout">
            <img src={detail.images[0]} width={200} alt="" />
                </div>
                <div className="singli_rout">
               <h1>{detail.title}</h1>
               <p>{detail.description}</p>
               <span>price:${detail.price}</span>

                </div>
            </div>
        </div>
    );
}

export default SinglRoute;
