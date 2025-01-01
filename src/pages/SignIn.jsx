 
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login_user } from "../logic/auth/authSignInAPI";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SignIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(login_user(data))
      .then((data) => {
        
        
        if (!(data.meta.requestStatus === "rejected")) {
          navigate("/welcome");
        }
        reset()
      })
      .catch((err) => {
        console.warn(err);
      })
  };

  return (
    <div className="flex flex-grow justify-center items-center bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{t("signin")}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
              <span className="label-text">{t("email")}</span>
              </label>
              <input
                type="text"
                placeholder={t("email")}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                className={`input input-bordered ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">{t("password")}</span>
              </label>
              <input
                type="password"
                placeholder={t("password")}
                {...register("password", {
                  required: "Password is required",
                })}
                className={`input input-bordered ${
                  errors.password ? "input-error" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
              {t("signin")}
              </button>
            </div>
          </form>
          <p className="text-center text-sm mt-4">
            Don&#39;t have an account?{" "}
            <Link to={"/signup"} className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
