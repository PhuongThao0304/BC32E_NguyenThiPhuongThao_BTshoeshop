import React, { Component } from 'react'

export default class Modaldetails extends Component {

    // state = {
    //     product: {
    //         "id": 1,
    //         "name": "Adidas Prophere",
    //         "alias": "adidas-prophere",
    //         "price": 350,
    //         "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    //         "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    //         "quantity": 995,
    //         "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    //     }

    // }

    // setStateModal = (item) => {
    //     console.log(item)
    //     this.setState({
    //         product: item
    //     })

    // }


    
    render() {
        const {product} = this.props
        // const state = this.state.product
        return (
            <div>
                {/* Button trigger modal */}
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setStateModal(product)}>
                   Xem chi tiết
                </button> */}
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               <div className='row'>
                                   <div className='col-4'>
                                       <img style={{width:'100%', height: '100%'}} src={product.image} alt="..." />
                                   </div>
                                   <div className='col-8'>
                                       <table className='table'>
                                           <tr>
                                               <td> Tên sản phẩm</td>
                                             <td>{product.name} </td>
                                           </tr>
                                           <tr>
                                               <td>Mô tả sản phẩm</td>
                                               <td>{product.description} </td>
                                           </tr>
                                           {/* <tr>
                                               <td>Số lượng</td>
                                               <td>{product.quantity} </td>
                                           </tr>
                                            */}
                                           
                                       </table>

                                   </div>
                               </div>

                               </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        
        )
    }
}
