import React from 'react'
import { ChevronRight } from 'react-bootstrap-icons'


function MpesaForm() {
  return (
    <form className='address_form'>
        <h5>Payment Method</h5>
        <div className='label_div' >
            <label htmlFor="mpesa-number">Mpesa Number</label>
            <input type="text" name="mpesa-number" id="mpesa-number" required />
        </div>
        <div className='address_btns'>
        <button className='address_btn'>Save this number</button>
        <button className='address_btn'>
          Next <span>{<ChevronRight />}</span>
        </button>
      </div>
    </form>
  )
}

export default MpesaForm