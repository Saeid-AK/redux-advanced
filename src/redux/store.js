import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './reducers/ui-slice';
import cartSlice from './reducers/cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
