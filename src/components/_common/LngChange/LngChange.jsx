import { MdGTranslate } from "react-icons/md";
import i18n from "../../../utils/i18n";

const LngChange = () => {
    function lngChange(lng) {
        localStorage.setItem("lang", "en");
        console.log(lng);
        i18n.changeLanguage(lng);
    }
  return (
      <details className="dropdown dropdown-end">
        <summary className="btn m-1">
            <MdGTranslate />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <button onClick={() => {
                lngChange("en");

            }}>English</button>
          </li>
          <li>
            <button onClick={() => {
                lngChange("am");
                
            }}>Armenian</button>
          </li>
          <li>
            <button onClick={() => {
                lngChange("ru");
            }}>Russian</button>
          </li>
          <li>
            <button onClick={() => {
                lngChange("fr");
            }}>France</button>
          </li>
          <li>
            <button onClick={() => {
                lngChange("kor");
            }}>Korean</button>
          </li>
        </ul>
      </details>
  );
};

export default LngChange;
