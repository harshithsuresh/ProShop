import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="h-screen w-full">
        <NavBar />
        <main>
          <div className="container py-3 ">
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
