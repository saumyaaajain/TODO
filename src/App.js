import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import AppRouter from "./router/AppRouter";
import task from './reducers/task';
import {add} from './actions/task';

const store = createStore(combineReducers({
    tasks: task,
}));

store.dispatch(add({title:"task 1",description:'hello'}));
store.dispatch(add({title:'task 2',description:'task1'}));
const state = store.getState();
console.log(1);
console.log(state);

function App() {
  return (
      <Provider store={store}>
          <AppRouter />
      </Provider>
  );
}

export default App;
