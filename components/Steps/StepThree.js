import { TextField } from '@mui/material';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';


const dev = process.env.NODE_ENV === 'development';

const StepThree = (props) => {

     // Payment details
    const [cardNum, setCardNum] = useState(dev ? '6969 6969 6969 6969' : '');
    const [expMonth, setExpMonth] = useState(dev ? '11' : '');
    const [expYear, setExpYear] = useState(dev ? '2023' : '');
    const [cvv, setCvv] = useState(dev ? '123' : '');
    const [billingPostalZipcode, setBillingPostalZipcode] = useState(
        dev ? '90089' : ''
    );

    return (
        <>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cardNum"
              label="Card Number"
              name="cardNum"
              value={cardNum}
              onChange={(e) => setCardNum(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="expMonth"
              label="Expiry Month"
              name="expMonth"
              value={expMonth}
              onChange={(e) => setExpMonth(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="expYear"
              label="Expiry Year"
              name="expYear"
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cvv"
              label="CVV"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="billingPostalZipcode"
              label="Postal/Zip Code"
              name="postalCode"
              value={billingPostalZipcode}
              onChange={(e) => setBillingPostalZipcode(e.target.value)}
            />
          </>
    )
}

export default dynamic(() => Promise.resolve(StepThree), {
    ssr: false,
});
