import { configureStore } from '@reduxjs/toolkit';
import AddToCart from "../features/AddToCart";


export const store = configureStore({
  reducer: {
    Card:AddToCart
  }

  });

