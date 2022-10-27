import React from "react";
import "./Modal.css";

function Exbtn({ setOpenModal }) {
  return (

        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            X
          </button>
        </div>
       

  );
}

export default Exbtn;
