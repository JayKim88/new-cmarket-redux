import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
//! createStore 메소드를 활용해 reducer를 연결하는 방법인데요,
//! createStore와 더불어 다른 리듀서의 조합을 인자로 넣어서 스토어를 생성
//! 이 경우, 비동기 액션을 구현하기 위해 thunk 미들웨어를 사용한다.
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
