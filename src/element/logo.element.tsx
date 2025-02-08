import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <img
          src="../../public/logo2.png"
          alt="Logo2"
          className="h-20 rounded-full"
        />
      </Link>
    </div>
  );
};

export default Logo;
