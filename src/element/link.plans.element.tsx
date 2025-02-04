interface LinkProps {
  children: React.ReactNode;
}
const LinkPlans: React.FC<LinkProps> = ({ children }) => {
  return (
    <a
      href="https://wa.me/5599984220590"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
    >
      {children}
    </a>
  );
};

export default LinkPlans;
