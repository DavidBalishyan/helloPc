import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postUser } from "../logic/auth/authSignUpAPI";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(postUser(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
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
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
