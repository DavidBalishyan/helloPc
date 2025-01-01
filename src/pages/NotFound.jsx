import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl font-medium mt-4">Oops! Page Not Found</p>
      <p className="mt-2 text-center max-w-md">
        The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <div className="mt-6">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
