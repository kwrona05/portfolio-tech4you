import { useTranslation } from "react-i18next";
import "../App.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "pl" : "en");
  };

  return (
    <header>
      <div>
        <h1>Tech 4 You</h1>
      </div>
      <div>
        <div>{t("home-page")}</div>
        <div>{t("offer")}</div>
        <div>{t("portfolio")}</div>
        <div>{t("about")}</div>
        <div>{t("contact")}</div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isEnglish}
            onChange={toggleLanguage}
          />
          <span className="slider">
            <span className="flag">{isEnglish ? "🇬🇧" : "🇵🇱"}</span>
          </span>
        </label>
      </div>
    </header>
  );
};
export default Header;
