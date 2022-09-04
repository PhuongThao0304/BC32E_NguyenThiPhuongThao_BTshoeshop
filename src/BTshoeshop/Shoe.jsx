import React, { Component } from 'react'
import Modaldetails from './Modaldetails'

export default class Shoe extends 



Component {
   
    render() {
        const {product, handleProductDetail} = this.props
        return (
            
                <div className='card' >
                    <div className='card-body'>
                        <img style={{ height: '250px', width: '250px' }} src={product.image} alt="..." />

                    </div>
                    <div className='card-footer text-left'>
                        <p>{product.name}</p>
                        <p>{product.price}$</p>
                        <div className='row'>
                        <button className='btn btn-success mr-2'>Add to cart</button>
                        <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal" onClick={()=> handleProductDetail(product)}>Xem chi tiết</button>
                        </div>
                       
                    </div>
                </div>
        

        )
    }
}
