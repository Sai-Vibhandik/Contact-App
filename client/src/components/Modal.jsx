const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
