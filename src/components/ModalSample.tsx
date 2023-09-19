import { IoCloseSharp } from "react-icons/io5";

const ModalSample = ({ visible, onClose }) => {
  const handleClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  if (!visible) {
    return null;
  }
  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded ">
        <h1>modalsample</h1>
        <button onClick={onClose}>
          <IoCloseSharp />
        </button>
      </div>
    </div>
  );
};

export default ModalSample;
