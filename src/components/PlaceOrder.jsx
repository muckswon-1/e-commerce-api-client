import React from 'react'
import style from './PlaceOrder.module.css';
import { useLoaderData } from 'react-router-dom';

function PlaceOrder() {
    const {numberOfItems, itemsTotal} = useLoaderData();
  return (
    <div className={style.placeorder_container}>
            
        <table>
                <thead>
                    <th>Order Summary</th>
                </thead>
                <tbody>
                    <tr>
                       <td>Items ({numberOfItems})</td> 
                       <td>KSH {itemsTotal}</td>
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
                        <td> KSH 1900</td>
                    </tr>
                </tbody>
            </table>
        <button className='address_btn'>Place Order</button>
    </div>
  )
}

export default PlaceOrder