import { useSelector } from "react-redux";
import Toast from "./Toast";
//! Toast 로부터 dismisstime 을 받는다.
function NofiticationCenter() {
  //! notificationReducer 로 데이터가 최신화되었기 때문에 state.notificationReducer 로 데이터를 가져온다.
  const state = useSelector((state) => state.notificationReducer);
  // console.log(state);
  return (
    <div className="notification-container top-right">
      {state.notifications.map((n) => (
        <Toast key={n.uuid} text={n.message} dismissTime={n.dismissTime} />
      ))}
    </div>
  );
}

export default NofiticationCenter;
