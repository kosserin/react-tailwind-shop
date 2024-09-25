import React from "react";

const Toast = ({ message, buttonText, buttonHandler }) => {
  return (
    <div
      style={{ maxWidth: "calc(100% - 16px)" }}
      className="fixed bottom-5 bg-slate-100 text-black rounded right-1/2 translate-x-1/2 flex gap-2 z-10 py-3 justify-between px-4 w-80"
    >
      {message}
      <button onClick={buttonHandler} className="font-semibold">
        {buttonText}
      </button>
    </div>
  );
};

export default Toast;
