import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './Header.scss';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    const getUserName = () => {
        let userName = '';
        if (user) {
            userName = user.email.split('@')[0];
        }

        return userName;
    };

    return (
        <div className="header">
            <Link to="/">
                <LocalConvenienceStoreIcon
                    className="header__logo"
                    style={{ fontSize: 40 }}
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user ? '/login' : ''}>
                    <div
                        onClick={handleAuthentication}
                        className="header__option"
                    >
                        <span className="header__optionLineOne">
                            Hello {!user ? 'Guest' : getUserName()}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
