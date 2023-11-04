import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer'
import thunkMiddleware  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//PERMITE Utilizar react-redux
const composeEnhancer = composeWithDevTools({}) || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store