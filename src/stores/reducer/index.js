import {combineReducers} from 'redux';

import counter from './counter';
import createOrder from './createOrder';
import addUrl from './addUrl';

export default combineReducers({
  counter,
  createOrder,
  addUrl,
});
