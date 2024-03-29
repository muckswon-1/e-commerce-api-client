import React from 'react'
import style from './PlaceOrder.module.css';

function PlaceOrder() {
  return (
    <div className={style.placeorder_container}>
            
        <table>
                <thead>
                    <th>Order Summary</th>
                </thead>
                <tbody>
                    <tr>
                       <td>Items (3)</td> 
                       <td>KSH 500</td>
                    </tr>
                    <tr>
                        <td>Shipping and handling</td>
                        <td>KSH 100</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>KSH 100</td>
                    </tr>
                    <tr>
                        <td>Order total</td>
                        <td> KSH 700</td>
                    </tr>
                </tbody>
            </table>
        <button className='address_btn'>Place Order</button>
    </div>
  )
}

export default PlaceOrder