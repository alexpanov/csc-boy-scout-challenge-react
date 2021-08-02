import { configureStore } from '@reduxjs/toolkit';
import products from '../features/products';

// In case you want to use redux, it's readily available.
export const store = configureStore({
  reducer: {
    products,
  },
});
