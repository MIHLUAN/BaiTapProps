import React, { Component } from 'react'
import Cart from './Cart'
import Modal from './Detail'
import ProductList from './ProductList'

export default class ShoesStore extends Component {
  state = {
    gioHang: [
      
    ],
    spChiTiet :{
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  

  
}
xoaGioHang = (maSPClick) => {
  // console.log(maSPClick)
  //Cách 1:
  let gioHang = this.state.gioHang;
  let index = gioHang.findIndex(sp => sp.id === maSPClick);
  if(index !== -1){
      gioHang.splice(index,1);
  }
  //cách 2:
  // gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
  //setState
  this.setState({
      gioHang:gioHang
  })
}
botGioHang = (maSPClick) => {
  // console.log(maSPClick)
  //Cách 1:
  let gioHang = this.state.gioHang;
  let index = gioHang.findIndex(sp => sp.id === maSPClick);
  let spGH = gioHang.find(sp => sp.id === maSPClick);
  console.log(index)
  if(spGH.soLuong>1)
  spGH.soLuong= spGH.soLuong-1
  else 
{
      gioHang.splice(index,1);
  }
  //cách 2:
  // gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
  //setState
  this.setState({
      gioHang:gioHang
  })
}

  themGioHang = (spClick) => {
    spClick = {...spClick,soLuong:1};

    console.log(spClick);
    let gioHang = this.state.gioHang;
    //Xét sản phẩm được có trong giỏ hàng hay chưa 
    let spGH = gioHang.find(sp => sp.id === spClick.id);
    if(spGH){
        spGH.soLuong = spGH.soLuong + 1;
    }else {
        gioHang.push(spClick);
    }
   
  
    //setState 
    this.setState({
        gioHang: gioHang
    })
}
xemChiTiet = (phoneClick) => {
        // console.log(phoneClick)
        //Cập nhật state thành sp click
        this.setState({
            spChiTiet:phoneClick
        })
    }

  render() {
    return (
      <div>
      
      <h3 className='text-center mt-2'>Shoes Shop</h3>
      <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} botGioHang={this.botGioHang} themGioHang={this.themGioHang}/>
      <ProductList themGioHang={this.themGioHang} xemCT={this.xemChiTiet}/>

      <Modal ct={this.state.spChiTiet}/>
      
      </div>
    )
  }
}
