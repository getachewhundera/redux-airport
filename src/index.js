import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/

//redux

import {Provider} from 'react-redux';

// Import applyMiddleware from redux
import { applyMiddleware, createStore, combineReducers } from 'redux';

// Import logger from our new redux-logger lib
import {logger} from 'redux-logger';

/** TODO: Add REDUCERS */  
const airlineList = (state = [], action) => {
    if(action.type === 'ADD_AIRLINE') {
      console.log(`The element was ${action.payload}`);
      // [ old array contents, new item]
      return [...state, action.payload]
  
    }
    return state
  }
  

/** TODO: Create store */
const storeInstance = createStore(
    combineReducers(
        {
    airlineList
        }
    ),
    // Tell redux that we want to use our new logger
    applyMiddleware(
        logger
    )
  );
  
  


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />   
        </Provider>
       
    </React.StrictMode>
);