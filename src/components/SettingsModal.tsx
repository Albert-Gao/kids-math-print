import Modal from "react-modal";
import { Settings } from "./Settings/Settings";

export const SettingsModal: React.FC<{
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isModalOpen, setIsModalOpen }) => {
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Modal
      closeTimeoutMS={400}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="modal"
      className="flex overflow-hidden text-left align-bottom bg-white rounded-none shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:rounded-lg sm:max-h-180"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center sm:items-center"
    >
      <div
        className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <Settings closeModal={closeModal} />
      </div>
    </Modal>
  );
};
