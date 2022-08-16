import { createStore } from 'redux';
import counterReducer from './counter/coutnerReducer';


const store = createStore(counterReducer)

export default store;