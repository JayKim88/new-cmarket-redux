import { ENQUEUE_NOTIFICATION, DEQUEUE_NOTIFICATION } from "../actions/index";
import { initialState } from "./initialState";

const notificationReducer = (state = initialState, action) => {
  //! action 의 type(ADD_TO_CART 등) 에 따라서 특정 동작을 수행한다. => 특정 동작? state 를 변경해주는 것.
  //! type 과 payload(quantity, id) 등을 받아와 아래 동작을 수행.

  switch (action.type) {
    case ENQUEUE_NOTIFICATION:
      //! 기존의 initialState 의 notification 에 새로운 액션 내용을 추가한다.
      //! action.payload { message, dismissTime, uuid, },
      return Object.assign({}, state, {
        notifications: [...state.notifications, action.payload],
      });
    case DEQUEUE_NOTIFICATION:
      //! notification 중 가장 첫번째 요소를 제거한 새로운 배열로 상태를 변경한다.
      return Object.assign({}, state, {
        notifications: state.notifications.slice(1),
      });
    default:
      return state;
  }
};

export default notificationReducer;
