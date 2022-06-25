import {combineReducers} from 'redux';

import counter from './counter';
import createOrder from './createOrder';
import addUrl from './addUrl';
import profile from './profile';

export default combineReducers({
  counter,
  createOrder,
  addUrl,
  profile,
});
