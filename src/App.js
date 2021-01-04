import { useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Payment from './components/payment/Payment';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
    'pk_test_51I5fj1Af7QGlqNWPY8mICKkRblJyJyhroAZxn6rXsAQoNVWZpoaiqpCbqwM5zOaWn0frfXTWPhb1UZfT8Rtxng0v002aR6M3yS'
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads...
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // The user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={stripePromise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
