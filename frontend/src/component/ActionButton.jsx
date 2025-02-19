const ActionButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
    >
      {children}
    </button>
  );
};

export default ActionButton;
