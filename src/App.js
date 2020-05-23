import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import AppRouter from "./router/AppRouter";
import taskLists from './reducers/task';
import {addTaskList} from './actions/task';
import filtersReducer from './reducers/filter';
import moment from "moment";

const store = createStore(combineReducers({
    taskLists: taskLists,
    filters: filtersReducer,
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//console.log(moment([27/12/1998]));
store.dispatch(addTaskList({id: '123', title: 'Task List 1', taskList: [{title:"task 1",description:'hello', status: 'in-progress',startDate:moment([2020/1/20]), endDate:moment([2020/1/27]), createdAt:moment([2020/1/27])}, {title:"task 1",description:'hello',status:'completed' ,startDate:moment([2020/1/20]), endDate:moment([2020/1/27]), createdAt:moment([2020/1/27])}]}));
store.dispatch(addTaskList({id: '1234',title: 'TL 2', taskList: [{title:'task 2',description:'task1',status:'in-progress' ,startDate:moment([20020/1/10]), endDate:moment([2020/1/23]), createdAt:moment([2020/1/23])}]}));
store.dispatch(addTaskList({id: '1235',title:'TL 3', taskList: [{title:'task 3',description:'task123', startDate:moment([2020/1/3]), endDate:moment([2020/1/30]), createdAt:moment([2020/1/30]), status:'completed'}]}));
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
