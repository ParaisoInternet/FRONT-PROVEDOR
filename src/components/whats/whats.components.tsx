import { FaWhatsapp } from "react-icons/fa";
const Whats = () => {
  return (
    <a
      href="https://wa.me/5599984220590"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default Whats;
