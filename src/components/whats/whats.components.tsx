import { MessageCircle } from "lucide-react";
const Whats = () => {
  return (
    <a
      href="https://wa.me/5599984220590"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default Whats;

<MessageCircle />;
