import { useState } from "react";
import { QuizSection } from "./components/QuizSection";
import Modal from "react-modal";
import { SettingsModal } from "./components/SettingsModal";

Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="flex flex-wrap items-center justify-center"
      style={{ lineHeight: 1.7 }}
    >
      <QuizSection setIsModalOpen={setIsModalOpen} />
      <SettingsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default App;
