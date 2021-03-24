import React, { useEffect, useState } from "react";

/*//! <Toast key={n.uuid} text={n.message} dismissTime={n.dismissTime} />

{
  message,
  dismissTime,
  uuid,
}, 
*/

export default function Toast({ text, dismissTime }) {
  const [isFading, setIsFading] = useState(false);

  //? useEffect 은 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것
  //? 으로 이해하면 좋다. useEffect를 컴포넌트 내부에 둠으로써 effect를 통해 count state 변수(또는 그 어떤 prop에도)에
  //? 접근할 수 있게 됩니다. 함수 범위 안에 존재하기 때문에 특별한 API 없이도 값을 얻을 수 있는 것입니다.
  useEffect(() => {
    let mounted = true;
    //! 5000-500 = 4500. 4.5초 이후에 isFading 을 true 로 최신화 한다.
    //! div 의 클래스이름에 fade-out 이 생겨 CSS의 사라지는 효과가 실행된다.
    setTimeout(() => {
      if (mounted) {
        setIsFading(true);
      }
    }, dismissTime - 500);

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <div className={`notification ${isFading ? "fade-out" : ""}`}>{text}</div>
    );
  }
  
  //! CSS 부분
  // .fade-out {
  //   opacity: 0;
  //   transform: opacity 2s;
  // }/
  //! className fade-out 이 추가되면 2초 동안 opacity를 0으로 만든다.