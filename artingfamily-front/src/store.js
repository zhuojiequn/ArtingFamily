import {applyMiddleware,createStore} from 'redux';
import reducers from './reducers/red-main';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig,reducers);
const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);
let persistor = persistStore(store);
export  {store,persistor};