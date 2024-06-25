import React from 'react';
import './Loading.css'

const Loading = ({count}) => {
    return (
        <div className='skeleton__wrapperr container'>
        {
            Array(count).fill("").map((_, inx)=>  <div key={inx} className="skeleton__card">
            <div className="skeleton__images skeleton__anime"></div>
            <div className="skeleton__title skeleton__anime"></div>
            <div className="skeleton__price skeleton__anime"></div>
            <div className="skeleton__price skeleton__anime"></div>
        </div>)
        }
    </div>
    );
}

export default Loading;
