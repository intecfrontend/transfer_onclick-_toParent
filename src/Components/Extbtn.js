import React from "react";
import "./Modal.css";

function Exbtn({ closeModal }) {
  return (

        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal();
            }}
          >
            X
          </button>
        </div>
       

  );
}

export default Exbtn;
