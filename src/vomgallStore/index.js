import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// my reducers
import singUpReducer from './singUpSlice';
import logInReducer from './logInSlice';
import gallerySlice from './gallerySlice';

const rootReducer = combineReducers(
    {
        logIn: logInReducer,
        singUp: singUpReducer,
        gallery: gallerySlice,
    }
);

const persistConfig = {
    // 'key' is indeficate of one or more storage
    key: 'root',
    storage,
    // whitelist: ['persist:root.logIn', 'persist:root.phonebook'],
};

// basic reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    }
);

export const persistor = persistStore(store);