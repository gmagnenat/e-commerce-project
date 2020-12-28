import React from 'react';
import Product from '../product/Product';
import shopData from '../../shop-data';
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__slider"></div>
                <div className="home__row">
                    {shopData
                        .slice(0, 2)
                        .map(function (
                            {
                                id,
                                title,
                                price,
                                description,
                                category,
                                image,
                                rating,
                            },
                            i
                        ) {
                            return (
                                <Product
                                    key={id}
                                    title={title}
                                    price={price}
                                    image={image}
                                    rating={rating}
                                />
                            );
                        })}
                </div>
                <div className="home__row">
                    {shopData
                        .slice(2, 5)
                        .map(function (
                            {
                                id,
                                title,
                                price,
                                description,
                                category,
                                image,
                                rating,
                            },
                            i
                        ) {
                            return (
                                <Product
                                    key={id}
                                    title={title}
                                    price={price}
                                    image={image}
                                    rating={rating}
                                />
                            );
                        })}
                </div>
                <div className="home__row">
                    {shopData
                        .slice(5, 6)
                        .map(function (
                            {
                                id,
                                title,
                                price,
                                description,
                                category,
                                image,
                                rating,
                            },
                            i
                        ) {
                            return (
                                <Product
                                    key={id}
                                    title={title}
                                    price={price}
                                    image={image}
                                    rating={rating}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Home;
