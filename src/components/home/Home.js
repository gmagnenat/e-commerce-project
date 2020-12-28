import React from 'react';
import Product from '../product/Product';
import shopData from '../../shop-data';
import './Home.scss';

function Home() {
    const sliceData = (shopData, start, end) => {
        return shopData
            .slice(start, end)
            .map(function (
                { id, title, price, description, category, image, rating },
                i
            ) {
                return (
                    <Product
                        id={id}
                        key={id}
                        title={title}
                        price={price}
                        image={image}
                        rating={rating}
                        description={description}
                        category={category}
                    />
                );
            });
    };
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__slider"></div>
                <div className="home__row">{sliceData(shopData, 0, 2)}</div>
                <div className="home__row">{sliceData(shopData, 2, 5)}</div>
                <div className="home__row">{sliceData(shopData, 5, 6)}</div>
            </div>
        </div>
    );
}

export default Home;
