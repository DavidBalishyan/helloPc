import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-base-200 text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 HelloPc inc. {t("arl")}.</p>
      </div>
    </footer>
  );
};

export default Footer;