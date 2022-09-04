import React, { Component } from 'react'
import Shoe from './Shoe'

export default class Shoelist extends Component {
   

    render() {
        const {productList, handleProductDetail} = this.props
       
        
        return (
            <div className='row'>
                {productList.map((item) => {
                    return (
                        <div className='col-4 mb-4' key={item.id} >
                        <Shoe product = {item} handleProductDetail={handleProductDetail} />
                        </div>

                    )
                })}
            </div>
        )
    }
}
