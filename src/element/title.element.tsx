interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h2 className="text-orange-500 text-4xl font-bold text-center mb-12">
      {children}
    </h2>
  );
};

<h2 className="text-4xl font-bold text-center mb-12">Fale Conosco</h2>;
export default Title;
