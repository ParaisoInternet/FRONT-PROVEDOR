const BoletoSeparador = () => {
  return (
    <div className="bg-wahite py-10 px-6 text-center rounded-lg shadow-md">
      <h3 className="text-xl md:text-2xl font-bold text-blue-900">
        Precisando da 2ª via do boleto?
      </h3>
      <p className="text-gray-700 mt-2">
        Gere em poucos cliques, sem complicação!
      </p>
      <a
        href="https://paraisointernet.sgp.tsmx.com.br/accounts/central/login"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition-all"
      >
        Imprimir 2ª Via
      </a>
    </div>
  );
};

export default BoletoSeparador;
