import React from 'react';

import './App.css';
import { findDuplicates, timesToAppear } from './utils';

let products = [
  {
    id: 1,
    title: "Pocket Knife",
    price: 35,
    imageUrl: "https://i0.wp.com/scoutingmagazine.org/wp-content/uploads/2013/02/SwissArmyKnife.jpg?w=550&ssl=1"
  },
  {
    id: 2,
    title: "Trail Mix",
    price: 12,
    imageUrl: "https://m.media-amazon.com/images/I/91P47phWyUL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    title: "Rain Gear",
    price: 59,
    imageUrl: "https://i2.wp.com/scoutingmagazine.org/wp-content/uploads/2013/02/MarmotPrecip.jpg?w=550&ssl=1"
  },
]

function LoadProducts() {
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 500)
  });
}

class App extends React.Component {
  state = {
    items: [],
    products: undefined,
    l: true,
    code: ''
  }

  componentDidMount() {
    this.setState({l: true});

    let that = this;
    LoadProducts().then(function (products) {
      that.setState({l: false, products});
    });
  }

  handleClick = (finalObj, totalPrice) => {
    let total = totalPrice;
    if (this.state.code === 'CLEANCODE10') {
      total = totalPrice * 0.9;
    } else if (this.state.code === 'ENERGY15') {
      total = 0;
      Object.entries(finalObj).forEach(([title, { count, price }]) => {
        total += title === 'Trail Mix' ? price * count * 0.85 : price * count;
      });
    } else if (this.state.code === 'DRY20') {
      total = 0;
      Object.entries(finalObj).forEach(([title, { count, price }]) => {
        total += title === 'Rain Gear' ? price * count * 0.8 : price * count;
      });
    }
    alert(`You would pay ${total.toFixed(2)}`);
  }

  render() {
    let finalObj = {};
    this.state.items.forEach((item) => {
      if (finalObj[item.title]) {
        finalObj[item.title].count += 1;
      } else {
        finalObj[item.title] = {count: 1, price: item.price };
      }
    });

    const totalPrice = this.state.items.reduce((prevValue, currValue) => {
      return prevValue + currValue.price
    }, 0);

    console.log('finalObj: ', finalObj);
    if (!this.state.l) {
      return (
        <div className="main">
          <header className="main-header">
            <h1>Scout Essentials</h1>
          </header>
          <div>
            <h1>Product List</h1>
            <div className="product-list">
              {
                this.state.products.map((x) => {
                  return (
                    <div className="product">
                      <p>{x.title}</p>
                      <p>${x.price}</p>
                      <div>
                        <img className="product-image" src={x.imageUrl} alt={x.title}/>
                      </div>
                      <button
                        className="btn"
                        onClick={() => {
                          console.log('add', x);
                          let pr = {
                            title: x.title,
                            price: x.price
                          }
                          this.setState({items: [...this.state.items, pr]})
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="cart">
            <h3>Your Cart</h3>
            <p>Items in cart: {this.state.items.length}</p>
            {Object.entries(finalObj).map(([title, { count }], index) => {
              return (
                <div key={`product-${index}`}>
                  {`${title} x ${count}`}
                </div>
              )
            })}
            <p>Total price: ${totalPrice}</p>

            <label>code</label>
            <input value={this.state.code} onChange={(e) => this.setState({ code: e.target.value })} />
            <div className="buttons">
              <button
                className="btn"
                onClick={() => {
                  this.setState({items: []})
                }}>
                Clear
              </button>
              <button
                className="btn"
                onClick={() => this.handleClick(finalObj, totalPrice)}
              >
                Checkout
              </button>
            </div>
          </div>
          <footer>
            <hr/>
            <p>
              <span>Scout Essentials by CSC Engineering, 2021. </span>
              <a href="https://jobs-cscgeneration.icims.com/jobs">Join Us!</a>
            </p>
          </footer>
        </div>
      );
    }

    return 'Loading...'
  }
}

export default App;
