import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeError,
  removeInfo,
  removeSuccess,
} from "../../../logic/global/globalSlice";

const NotificationManager = () => {
  const [notifications, setNotifications] = useState([]);
  const { errors, success, info } = useSelector((state) => state?.global);
  const dispatch = useDispatch();

  useEffect(() => {
    const allMessages = [
      ...errors.map((e) => ({ ...e, type: "error" })),
      ...success.map((s) => ({...s,type: "success",})),
      ...info.map((i) => ({...i,type: "info",})),
    ];

    const sortedMessages = allMessages.sort(
      (a, b) => a.timestamp - b.timestamp
    );
    setNotifications(sortedMessages);
  }, [errors, success, info]);

  useEffect(() => {
    const timers = notifications.map((notification) => {
      return setTimeout(() => {
        handleClose(notification);
      }, 2000);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [notifications]);

  const handleClose = (key) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== key.id));

    if (key.type === "error") {
      dispatch(removeError(key.id));
    } else if (key.type === "success") {
      dispatch(removeSuccess(key.id));
    }else if(key.type === "info") {
      dispatch(removeInfo(key.id))
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
      {notifications.map((notification) => (
        <div
          key={notification.timestamp + notification.id}
          className={`alert shadow-lg max-w-sm ${
            notification.type === "error"
              ? "alert-error"
              : notification.type === "info"
              ? "alert-info"
              : "alert-success"
          } animate-fade-in`}
        >
          <div>
            <span>{notification.message}</span>
          </div>
          <div className="flex-none">
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => handleClose(notification)}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationManager;
