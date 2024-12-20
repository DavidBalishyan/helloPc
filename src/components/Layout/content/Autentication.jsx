import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Auth = ({ isMenuOpen }) => {
  const { t } = useTranslation ();
  if (isMenuOpen) {
    return (
      <div className="px-6 space-y-4">
        <Link
          to="/signin"
          className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          {t("signin")}
        </Link>
        <Link
          to="/signup"
          className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          {t("signup")}
        </Link>
      </div>
    );
  }
  return (
    <div className="hidden lg:flex space-x-6">
      <Link
        to="/signin"
        className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        {t("signin")}
      </Link>
      <Link
        to="/signup"
        className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        {t("signup")}
      </Link>
    </div>
  );
};

export default Auth;
