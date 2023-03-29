import { configureStore,combineReducers } from '@reduxjs/toolkit';
import tokenReducer from '../_reducers/Auth';
import userReducer from '../_reducers/user'
import { persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';


const reducers = combineReducers({
    authToken: tokenReducer,
    user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducers,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(thunkMiddleware),
});

export default store; 