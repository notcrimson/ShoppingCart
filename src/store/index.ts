import { legacy_createStore as createStore } from 'redux';
import { cashReducer } from './cashSlice';

export const store = createStore(cashReducer);
