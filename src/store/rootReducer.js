import { balancereducer } from './balanceSlice';
import { itemsReducer } from './itemsSlice';

export const rootReducer = {
  balance: balancereducer,
  items: itemsReducer,
};
