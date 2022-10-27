import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";
import Extbtn from "./Components/Extbtn";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}

      <Extbtn />
    </div>
  );
}

export default App;
