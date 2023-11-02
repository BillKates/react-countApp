import { combineReducers } from 'redux';
import { countReducer } from './count';
import { createStore } from 'redux'; // 新しく追加

const rootReducer = combineReducers({ count: countReducer });

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer); // Reduxストアを作成

export default rootReducer;
