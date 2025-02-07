import { User } from "lucide-react";

const ButtonCliente = () => {
  return (
    <a href="https://paraisointernet.sgp.tsmx.com.br/accounts/central/login">
      <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 flex items-center">
        <User className="inline mr-2 size-5" />
        Área do Cliente
      </button>
    </a>
  );
};

export default ButtonCliente;
