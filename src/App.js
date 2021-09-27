import { useReducer, useEffect } from "react";
import "./App.css";

let products = [
  {
    id: 1,
    title: "Pocket Knife",
    price: 35,
    imageUrl:
      "https://i0.wp.com/scoutingmagazine.org/wp-content/uploads/2013/02/SwissArmyKnife.jpg?w=550&ssl=1",
  },
  {
    id: 2,
    title: "Trail Mix",
    price: 12,
    imageUrl: "https://m.media-amazon.com/images/I/91P47phWyUL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    title: "Rain Gear",
    price: 59,
    imageUrl:
      "https://i2.wp.com/scoutingmagazine.org/wp-content/uploads/2013/02/MarmotPrecip.jpg?w=550&ssl=1",
  },
];

function loadProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}

function stateReducer(state, action) {
  const { type } = action;
  switch (type) {
    case "START_FETCHING_PRODUCTS":
      return { ...state, loading: action.loading };
    case "RECEIVE_PRODUCTS":
      return { ...state, loading: false, products: action.products };
    case "ADD_ITEM_TO_CART":
      const updatedItems = state.items
        .concat( action.item)
        .reduce((items, product) => {
        if (items[product.title]) {
          items[product.title].qty += product.qty ?? 1;
        } else {
          items[product.title] = { ...product, qty: product.qty ?? 1 };
        }
        return items;
      }, {});
      return { ...state, items: Object.values(updatedItems) };
    case "CLEAR_CART":
        return { ...state, items: [] };
    default:
      return state;
  }
}

function App() {
  const [{ loading, products, items }, dispatch] = useReducer(stateReducer, {
    items: [],
    products: undefined,
    loading: true,
  });

  useEffect(() => {
    dispatch({ type: "START_FETCHING_PRODUCTS", loading: true });

    loadProducts().then((products) => {
      dispatch({ products, type: "RECEIVE_PRODUCTS" });
    });
  }, []);
  if (loading) {
    return <div>'Loading...'</div>;
  }
  return (
    <div className="main">
      <header className="main-header">
        <h1>Scout Essentials</h1>
      </header>
      <div>---
        <h1>Product List</h1>
        <div className="product-list">
          {products.map(({ title, imageUrl, price }) => {
            return (
              <div className="product">
                <p>{title}</p>
                <p>${price}</p>
                <div>
                  <img
                    className="product-image"
                    src={imageUrl}
                    alt={title}
                  />
                </div>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch({ type: "ADD_ITEM_TO_CART", item: { title, price } });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cart">
        <h3>Your Cart</h3>
        <p>Items in cart: {items.length}</p>
        {items.map(({ title, qty }) => {
          return <div>{title} x {qty}</div>;
        })}
        <p>
          Total price: $
          {items.reduce((prevValue, currValue) => {
            return prevValue + currValue.price;
          }, 0)}
        </p>
        <div className="buttons">
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "CLEAR_CART" });
            }}
          >
            Clear
          </button>
          <button className="btn" onClick={() => alert("Not there yet")}>
            Checkout
          </button>
        </div>
      </div>
      <footer>
        <hr />
        <p>
          <span>Scout Essentials by CSC Engineering, 2021. </span>
          <a href="https://jobs-cscgeneration.icims.com/jobs">Join Us!</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
