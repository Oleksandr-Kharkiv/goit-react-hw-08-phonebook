import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';  /* для збереження даних в local storage */
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

const persistedCombReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedCombReducer,
    contacts: contactsReducer,
    filters: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);



/* ------------------------------- hw-07 -----------------------------*/

// import { configureStore, 
//   // combineReducers 
// } from '@reduxjs/toolkit';
// import { filterReducer } from './filterSlice';
// import { contactsReducer } from './contactsSlice';
// import {
//   persistStore,
//   // persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';  /* для збереження даних в local storage */
// // import { filterReducer } from './filterSlice';
// // import { contactsReducer } from './contactsSlice';
// // import storage from 'redux-persist/lib/storage';

// // const reducerComb = combineReducers({
// //   contacts: contactsReducer,
// //   filter: filterReducer,
// // });

// // const persistConfig = {
// //   key: 'contacts',
// //   storage,
// //   whitelist: ['contacts'],
// // };

// // const persistedCombReducer = persistReducer(persistConfig, reducerComb)

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filterReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);