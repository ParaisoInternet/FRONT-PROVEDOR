interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className="text-4xl font-bold text-center mb-12">{children}</h2>;
};

export default Title;
