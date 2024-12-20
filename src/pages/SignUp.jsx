/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { check_user_email, postUser } from "../logic/auth/authSignUpAPI";
import { addError, addInfo } from "../logic/global/globalSlice";
import { Link } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm({
    defaultValues: {},
    mode: "onSubmit",
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(postUser(data));
  };

  return (
    <div className="flex flex-grow items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div className="form-control">
              <label htmlFor="fullName" className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="true"
                {...register("fullName", { required: "Full Name is required" })}
                className="input input-bordered w-full"
              />
              {errors.fullName && (
                <p className="text-error text-sm">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="true"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                  validate: async (value) => {
                    const result = await dispatch(check_user_email(value));
                    return result.payload
                      ? dispatch(
                          addError(
                            "Email is alredy taken. Please choose another email"
                          )
                        )
                      : true;
                  },
                })}
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-error text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                autoComplete="true"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered w-full"
              />
              {errors.password && (
                <p className="text-error text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Sign up
              </button>
            </div>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to={"/signin"} className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
