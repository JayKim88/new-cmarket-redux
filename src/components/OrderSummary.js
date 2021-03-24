import React from "react";

export default function OrderSummary({ totalQty, total }) {
  const payment = () => {
    const totalPrice = total;
    if (totalPrice === 0) {
      alert("장바구니에 커피를 담아주세요");
      return;
    }
    alert(`총 ${total} 원 결제되었습니다. 잠시만 기다려주세요 :)`);
    window.location.href = "/";
  };

  return (
    <div id="order-summary-container">
      <h4>주문 합계</h4>
      <div id="order-summary">
        총 아이템 개수 :{" "}
        <span className="order-summary-text">{totalQty} 개</span>
        <hr></hr>
        <div id="order-summary-total">
          합계 : <span className="order-summary-text">{total} 원</span>
        </div>
      </div>
      <div id="btnWrap">
        <button id="pay" onClick={payment}>
          결제하기
        </button>
      </div>
    </div>
  );
}
