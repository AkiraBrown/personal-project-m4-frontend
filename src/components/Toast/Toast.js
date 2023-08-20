import React, { useContext } from "react";
import { ToastContext } from "../common/context/context";
function Toast() {
  const { toastArr } = useContext(ToastContext);

  return (
    <>
      {toastArr.Name ? (
        <div className="alert alert-success">
          {`${toastArr.Name}: ${toastArr.Status}(${toastArr.Method}) `}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Toast;
