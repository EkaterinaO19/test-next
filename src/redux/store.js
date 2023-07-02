import {combineReducers, compose, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./slices/cartSlice";
import storage from 'redux-persist/lib/storage';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist'
import {emailReducer} from "@/redux/slices/emailSlice";
import {responseReducer} from "@/redux/slices/responseSlice";



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,cartReducer, emailReducer,responseReducer )

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


export const persistor = persistStore(store)

