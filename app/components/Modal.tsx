import React from "react";

const Modal = ({ id }: { id: string }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-base-300 p-6 rounded">
        <h1>Image Id: {id}</h1>
        <button className="btn btn-error">Close</button>
      </div>
    </div>
  );
};

export default Modal;
