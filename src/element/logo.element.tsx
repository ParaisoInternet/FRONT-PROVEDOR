import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <img src="../../public/logo5.png" alt="Logo2" className={className} />
      </Link>
    </div>
  );
};

export default Logo;
