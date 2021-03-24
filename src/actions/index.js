// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_QUANTITY = "SET_QUANTITY";
export const NOTIFY = "NOTIFY";
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION";

// actions creator functions
//! 아래 액션들을 어딘가에서 호출하고 id 나 수량 등을 전달해줘야 할 것 같다.
//! 이하 동기적인 액션 함수 
export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      itemId: itemId,
      quantity: 1,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    //TODO
    type: REMOVE_FROM_CART,
    payload: {
      itemId: itemId,
    },
  };
};

export const setQuantity = (itemId, quantity) => {
  return {
    //TODO
    type: SET_QUANTITY,
    payload: {
      itemId: itemId,
      quantity: quantity,
    },
  };
};

// !const rootReducer = combineReducers({
// !  itemReducer,
// !  notificationReducer
// !});

//! 이하 비동기적인 액션 함수 
export const notify = (message, dismissTime = 5000) => (dispatch) => {
  const uuid = Math.random();
  //! 비동기 함수인 notify 는 비동기 상황을 구현한 뒤 dispatch를 통해 다른 동기 액션을 호출한다.
  //! 여기서 다른 동기 액션이란 enqueueNotification, dequeueNotification
  //! dispatch 의 return 값을 notificationReducer 에 전달한다.
  dispatch(enqueueNotification(message, dismissTime, uuid));
  //! 5초가 지난 후 callback 실행하여 dequeueNotification 의 리턴값을 reducer 에 전달.
  setTimeout(() => {
    dispatch(dequeueNotification());
  }, dismissTime);
};

export const enqueueNotification = (message, dismissTime, uuid) => {
  return {
    type: ENQUEUE_NOTIFICATION,
    payload: {
      message,
      dismissTime,
      uuid,
    },
  };
};

export const dequeueNotification = () => {
  return {
    type: DEQUEUE_NOTIFICATION,
  };
};

