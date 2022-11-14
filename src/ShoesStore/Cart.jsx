import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    const {gioHang,xoaGioHang,themGioHang,botGioHang} = this.props;
    return (
      
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {}
                {gioHang.map((product,index)=>{

                     return  <tr key={index}>
                     <td>{product.id}</td>
                     <td>{product.name}</td>
                     <td>
                         <img src={product.image} width={50} height={50} alt='...' />
                     </td>
                     <td>
                     <button  className='btn btn-dark text-light me-1' onClick={()=>{
                      themGioHang(product)
                     }}>+</button> {product.soLuong}<button className='btn btn-dark text-light ms-1'  onClick={()=>{
                      botGioHang(product.id)
                     }}>-</button>
                     </td>
                     <td>
                         {product.price}$
                     </td>
                     <td>
                         {product.soLuong * product.price}$
                     </td>
                     <td>
                         <button className='btn btn-danger' onClick={()=>{
                             xoaGioHang(product.id)
                         }}>
                             <i className='fa fa-trash'></i>
                         </button>
                     </td>
                 </tr>
                })}
             </tbody>
            </table>
        
    )
  }
}
