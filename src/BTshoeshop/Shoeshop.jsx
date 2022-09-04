import React, { Component } from 'react'
import data from './data.json'
import Modaldetails from './Modaldetails'
import Shoe from './Shoe'
import Shoelist from './Shoelist'

export default class Shoeshop extends Component {
    state = {
        productDetail: {
            // "id": 1,
            // "name": "Adidas Prophere",
            // "alias": "adidas-prophere",
            // "price": 350,
            // "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            // "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            // "quantity": 995,
            // "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        }

    }

    handleProductDetail = (item) => {
        console.log(item)
        this.setState({
            productDetail: item
        })

    }



    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-3'>
                        <h2>Home</h2>
                        <h2>Shop</h2>
                    </div>
                    <div className='col-9'>
                        <Shoelist productList={data} handleProductDetail={this.handleProductDetail} /> 
                    </div>

                </div>
                <Modaldetails product = {this.state.productDetail}/>
            </div>
        )
    }
}
