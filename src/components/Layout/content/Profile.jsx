 
import { useNavigate } from "react-router-dom";
import usrimg from "../../../img/usr.svg";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../logic/global/globalSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={usrimg} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <button
            className="btn btn-primary"
            onClick={() => {
              localStorage.removeItem("usr_state");
              dispatch(setAuth(false));
              navigate("/signin");
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
