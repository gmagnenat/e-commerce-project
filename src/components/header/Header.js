import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './Header.scss';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import Login from '../login/Login';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

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
                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header__optionLineTwo">Login</span>
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
