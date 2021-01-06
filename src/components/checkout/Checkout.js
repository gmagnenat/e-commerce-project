import React from 'react';
import './Checkout.css';
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <h2 className="checkout__title">
                        Hey {user?.email}, here is your shopping basket
                    </h2>

                    {basket.map(
                        (
                            {
                                id,
                                title,
                                image,
                                price,
                                description,
                                category,
                                rating,
                            },
                            i
                        ) => {
                            return (
                                <CheckoutProduct
                                    id={id}
                                    key={i}
                                    title={title}
                                    image={image}
                                    price={price}
                                    description={description}
                                    category={category}
                                    rating={rating}
                                />
                            );
                        }
                    )}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
