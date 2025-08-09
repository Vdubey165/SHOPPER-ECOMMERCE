import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>

    <div className="descriptionbox-description">
        <p>
        An e-commerce website is an online platform that facilitates the buying and selling of product or services over the internet.
        </p>

        <p>
        E-commerce websites typically display product or services along with detailed descriptions,images,prices and any available variations(e.g sizes,colors).Each product usually has its own dedicated page with relevant information.
        </p>
    </div>
    </div>
  )
}

export default DescriptionBox
