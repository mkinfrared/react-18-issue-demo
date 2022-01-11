import React, { useState } from "react";
import Modal from "ui/Modal";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)}>open modal</button>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <p>I am a stupid modal, marklar</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
