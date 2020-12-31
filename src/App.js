import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/login">
                        <h1>Login Page</h1>
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
