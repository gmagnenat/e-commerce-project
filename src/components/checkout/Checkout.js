import React from 'react';
import './Checkout.scss';
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__slider"></div>
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket.map(
                        ({ title, image, price, description, category }, i) => {
                            return (
                                <CheckoutProduct
                                    key={i}
                                    title={title}
                                    image={image}
                                    price={price}
                                    description={description}
                                    category={category}
                                />
                            );
                        }
                    )}
                    {/* <BasketItem title="hello" /> */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
