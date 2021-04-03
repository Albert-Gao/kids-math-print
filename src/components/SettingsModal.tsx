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
        <Settings />

        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
          >
            Save
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};
