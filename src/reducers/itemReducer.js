import { act } from "react-dom/test-utils";
import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

//! initialState(데이터) 를 가져옴.
//! action 이라는 것은 따로 import 를 안해도 되는 건가?
const itemReducer = (state = initialState, action) => {
  //! action 의 type(ADD_TO_CART 등) 에 따라서 특정 동작을 수행한다. => 특정 동작? state 를 변경해주는 것.
  //! type 과 payload(quantity, id) 등을 받아와 아래 동작을 수행.
  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      //? 맨 앞에 빈 객체를 둔 이유? 다른 주소값을 가진 객체를 만들기 위함.
      //? 주소 값이 바뀌어야 리액트가 데이터가 변경 되었다고 인식하고 리렌더를 한다.
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.payload],
      });

    case REMOVE_FROM_CART:
      //TODO
      //! action.payload.itemId = 번호.
      let newCartItem = state.cartItems.filter(
        (Element) => Element.itemId !== action.payload.itemId
      );
      return Object.assign({}, state, {
        cartItems: newCartItem,
      });

    case SET_QUANTITY:
      //TODO
      //! test case 에서는 payload를 return 안에 넣어서 문제를 해결하길 바란다.
      let idx = state.cartItems.findIndex(
        (el) => el.itemId === action.payload.itemId
      );

      return Object.assign({}, state, {
        //! shallow copy 를 해야 원본 손실이 발생하지 않는다.
        //! immutability 를 위해, shallow copy 한다.
        cartItems: [
          ...state.cartItems.slice(0, idx),
          action.payload,
          ...state.cartItems.slice(idx + 1),
        ],
      });
    default:
      return state;
  }
};

export default itemReducer;

// if (state.cartItems.length > 0) {
//   state.cartItems[idx].quantity = action.payload.quantity;
// }
// 방법 1
// itemId 가 동일한 요소의 위치를 찾아서 그 부분만 바꿔준다.
// state.cartItems[idx].quantity = action.payload.quantity
// 방법 2
// const modifiedArray = state.cartItems.map((item) =>
//   item.itemId === action.payload.itemId
//     ? { ...item, quantity: action.payload.quantity }
//     : item
// );
// {} 를 쓰고 state, {...} 를 기입하면, 같은 속성을 가진 객체 병합
// 파라미터 순서에서 더 뒤에 위치한 동일한 속성을 가진 다른 객체에 의해 덮어쓰여짐.
