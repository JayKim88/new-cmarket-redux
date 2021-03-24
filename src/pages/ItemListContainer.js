import React, { useCallback } from "react";
import { addToCart, notify } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/Item";

function ItemListContainer() {
  const state = useSelector((state) => state.itemReducer);
  const { items, cartItems } = state;
  const dispatch = useDispatch();

  //! action addToCart
  //! dispatch : action 을 전달하는 메소드. dispatch 의 인자로 action 객체가 전달된다.
  //! reducer 를 호출하여 state 의 값을 바꾼다.
  const handleClick = (item) => {
    // console.log(state);
    if (!cartItems.map((el) => el.itemId).includes(item.id)) {
      //TODO: dispatch 함수를 호출하여 아이템 추가에 대한 액션을 전달하세요.
      dispatch(addToCart(item.id));
      dispatch(notify(`장바구니에 ${item.name} 가 추가되었습니다.`));
    } else {
      dispatch(notify("이미 추가된 상품입니다."));
    }
  };

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">Coffee Menus</div>
        {items.map((item, idx) => (
          <Item
            item={item}
            key={idx}
            handleClick={() => {
              handleClick(item);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
