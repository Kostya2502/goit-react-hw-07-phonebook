import { configureStore } from '@reduxjs/toolkit';
import mainReducer from "./reducers";

const store = configureStore({ reducer: { contacts: mainReducer } })

export default store;

// =============================================================
// import { configureStore } from '@reduxjs/toolkit';
// import mainReducer from "./reducers";
// import {
//     persistStore,
//     persistReducer
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };
// const store = configureStore({
//     reducer: {
//         contacts: persistReducer(contactsPersistConfig, mainReducer),
//     }
// });

// const persistor = persistStore(store);

// export { store, persistor };


