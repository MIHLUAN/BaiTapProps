import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const {ct} = this.props;
    console.log(ct)
    return (
      <>

 
  <div className="modal fade" id="exampleModal" style={{maxWidth:'500'}} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" >
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Chi Tiết Sản Phẩm</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <div className='container'>
        
        <div className='mt-2'>
            <div className='row'>
                <div className='col-4'>
                   
                    <img className='w-100' src={ct.image} alt='...' height={250} style={{ objectFit: 'cover' }} />
                </div>
                <div className='col-8'>
                <h3>{ct.name}</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className="w-25">Giá</th>
                                <td>{ct.price}$</td>
                            </tr>
                            <tr>
                                <th>Số lượng trong kho</th>
                                <td>{ct.quantity}</td>
                            </tr>
                            <tr>
                                <th>Thông tin sản phẩm</th>
                                <td>{ct.description}</td>
                            </tr>
                        </thead>
                    </table>
                </div>

            </div>
        </div>

    </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    
        </div>
      </div>
    </div>
  </div>


      </>
    )
  }
}
