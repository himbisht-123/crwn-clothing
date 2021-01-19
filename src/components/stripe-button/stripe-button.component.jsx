import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
      const PriceForStripe=price*100;
    const publishableKey='pk_test_51IBCs2DMoSEQ9RXTMXyN7abxXnm5PKTIzOG9Zv74w25NHtYzJsR2iuKE2LXYthriGcYVWDQX13Nw9T1fGVlxB5JY00kvq0a8nU';

    const onToken=token=>{
        alert('Payment Successful');
    }
    return(
   <StripeCheckout
    label='Pay now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={PriceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
   />

    )
};
export default StripeCheckoutButton;