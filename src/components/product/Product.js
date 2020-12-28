import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Product.scss';

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>
                                <StarIcon className="product__star" />
                            </p>
                        ))}
                </div>
            </div>
            <img className="product__image" src={image} alt="" />
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
            >
                Add to basket
            </Button>
        </div>
    );
}

export default Product;
