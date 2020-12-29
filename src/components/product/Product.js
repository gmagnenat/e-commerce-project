import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Product.scss';
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating, description, category }) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch the item in the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                description: description,
                category: category,
            },
        });
    };

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
                            <p key={i}>
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
                onClick={addToBasket}
            >
                Add to basket
            </Button>
        </div>
    );
}

export default Product;
