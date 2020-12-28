import React from 'react';
import './CheckoutProduct.scss';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const CheckoutProduct = (product) => {
    const { id, title, image, price, description, category } = product;
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
                <p className="checkoutProduct__category">{category}</p>
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
                >
                    Remove
                </Button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
