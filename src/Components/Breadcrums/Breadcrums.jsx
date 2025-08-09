import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const { product } = props;
    
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="breadcrumb arrow" /> SHOP <img src={arrow_icon} alt="breadcrumb arrow" /> {product.category} <img src={arrow_icon} alt="breadcrumb arrow" /> {product.name}
        </div>
    )
}

export default Breadcrums