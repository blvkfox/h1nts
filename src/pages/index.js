import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="mt-24">
      <h1 className="text-6xl mb-12"></h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-4">
        <Link to="/mark-up" className="html text-white py-3 text-center">
          HTML
        </Link>
        <Link to="/styles" className="css text-white py-3 text-center">
          CSS
        </Link>
        <Link
          to="/javascript"
          className="javascript text-black py-3 text-center"
        >
          JavaScript
        </Link>
      </div>
    </div>
  );
};

export default Index;
