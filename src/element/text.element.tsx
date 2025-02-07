interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return <p className="text-gray-600 mb-6">{children}</p>;
};

export default Text;
