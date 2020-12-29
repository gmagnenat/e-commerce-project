import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.scss';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = (product) => {
    const { id, title, image, price, description, category, rating } = product;
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        console.log(title);
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
                alt="the product"
            />
            <div className="checkoutProduct__info">
                <h2 className="checkoutProduct__title">{title}</h2>
                <p className="checkoutProduct__description">{description}</p>
                <p className="checkoutProduct__category">
                    Category: <span>{category}</span>
                </p>
                <div className="checkoutProduct__rating">
                    Rating:
                    <div className="checkoutProduct__stars">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p key={i}>
                                    <StarIcon className="checkoutProduct__star" />
                                </p>
                            ))}
                    </div>
                </div>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<DeleteIcon />}
                    className="checkoutProduct__remove"
                    onClick={removeFromBasket}
                >
                    Remove
                </Button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
