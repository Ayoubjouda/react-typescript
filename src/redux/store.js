import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
