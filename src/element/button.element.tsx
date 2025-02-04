interface ButtonProps {
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
