import { Config } from "../utils/Config";

export const FormButtons: React.FC<{
  onSubmit: () => void;
  closeModal: () => void;
}> = ({ onSubmit, closeModal }) => (
  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
    <button
      type="submit"
      className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
      onClick={onSubmit}
    >
      Save
    </button>
    <button
      type="button"
      className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
      onClick={() => {
        const config = new Config();
        config.reset();
        closeModal();
      }}
    >
      Reset to default
    </button>
    <button
      type="button"
      onClick={closeModal}
      className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
    >
      Cancel
    </button>
  </div>
);
