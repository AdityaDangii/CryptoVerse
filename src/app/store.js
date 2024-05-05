// import { configureStore } from '@reduxjs/toolkit';

// import { cryptoApi } from '../services/cryptoApi';
// // import { cryptoNewsApi } from '../services/cryptoNewsApi';

// export default configureStore({
//   reducer: {
//     [cryptoApi.reducerPath]: cryptoApi.reducer,
//     // [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
//   },
// });




import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
//   reducer:{
//       [cryptoApi.reducerPath]:cryptoApi.reducer,
//       [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
//   },
  middleware: (getDefaultMiddleware) =>{
      getDefaultMiddleware().concat(cryptoApi.middleware),
      getDefaultMiddleware().concat(cryptoNewsApi.middleware)
}})




const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: cryptoApi
        },
        serializableCheck: false,
      }),
  })
