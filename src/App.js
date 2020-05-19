import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import AppRouter from "./router/AppRouter";
import task from './reducers/task';
import {add} from './actions/task';
import filtersReducer from './reducers/filter';

const store = createStore(combineReducers({
    tasks: task,
    filters: filtersReducer
}));

store.dispatch(add({title:"task 1",description:'hello', startDate:0, endDate:3, completeBy:10}));
store.dispatch(add({title:'task 2',description:'task1', startDate:-1, endDate:9, completeBy:8}));
store.dispatch(add({title:'task 3',description:'task123', startDate:1, endDate:2, completeBy:8}));
const state = store.getState();
//console.log(1);
//console.log(state);

function App() {
  return (
      <Provider store={store}>
          <AppRouter />
      </Provider>
  );
}

export default App;
