import React from 'react';
import './Banner.scss';

function Banner() {
    return (
        <div className="banner">
            <div className="banner__text-box">
                <div className="heading-primary heading-primary--main">
                    Title
                </div>
                <div className="heading-primary heading-primary--sub">
                    Subtitle
                </div>
            </div>
        </div>
    );
}

export default Banner;
