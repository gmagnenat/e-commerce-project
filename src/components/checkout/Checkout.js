import React from 'react';
import './Checkout.scss';
import Subtotal from '../subtotal/Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__slider"></div>
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
