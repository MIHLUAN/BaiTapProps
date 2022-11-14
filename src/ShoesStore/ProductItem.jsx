import React, { Component } from 'react'
import Detail from './Detail';

export default class ProductItem extends Component {
 
  render() {
    const {product,themGioHang,xemCT} = this.props;
    
    return (
      <div className='card'>
      <img src={product.image} alt='...' className='w-100' height={250} style={{objectFit:'cover'}} />
      <div className='card-body'>
          <p>{product.name}</p>
          <p>{product.price.toLocaleString()+'$'}</p>
          <button className='btn btn-danger' onClick={()=>{
            themGioHang(product);
          }}>
              Add to cart
              <i className='fa fa-cart-plus'></i>
          </button>
          <button type="button" onClick={()=>{
            xemCT(product);
          }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Detail
          </button>
      </div>
      </div>
    )
  }
}
