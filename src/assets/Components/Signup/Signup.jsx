import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hook/useAuth";
import { imageUpload } from "../api/utils";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";
import useAxiosCommon from "../Hook/useAxiosCommon";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosCommon();
  const [error, setError] = useState("");
  const {
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
    logOut,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const image = form.image.files[0];
    const userInfo = {
      name,
      email,
      role,
      image,
    };
    console.log(userInfo);
    setError("");
    // validation
    if (password.length < 6) {
      setError("Password should be 6 charecters or longer");
      return;
    }
    const pattern = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    if (!pattern.test(password)) {
      setError(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      toast.error(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    }
    const emailpattern = /^[a-z][^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(email)) {
      setError("Invalid email format.");
      toast.error("Invalid email format.");
      return;
    }

    try {
      setLoading(true);
      // 1. Upload image and get image url
      const image_url = await imageUpload(image);
      console.log(image_url);
      //   save user in db
      await axiosPublic
        .post("/users", { ...userInfo, image: image_url })
        .then((res) => {
          console.log(res.data);
          if (res.data.upsertedId) {
            console.log("-----------------------", res);
            toast.success("User Create Successfully!");
          }
        });
      //2. User Registration
      const result = await createUser(email, password);
      console.log(result);
      // 3. Save username and photo in firebase
      await updateUserProfile(name, image_url);
      logOut();
      navigate("/login");
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err.message);
    }
    setLoading(false);
  };

  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signin Successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  

  return (
    <div className=" pt-16 pb-6 pl-14 min-h-screen rounded-none bg-no-repeat bg-cover overflow-x-auto w-full lg:py-10 flex justify-center items-center"
    style={{
      backgroundImage:
        'url("https://i.ibb.co/Fm7Bs6W/2148015628.jpg")',
    }}>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#F1FAEE] text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to MegaEarning</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#22AB59] bg-white text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#22AB59] bg-white text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#22AB59] bg-white text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm mb-2">
                Role:
              </label><br />
            </div>
            <div>
              <select name="role" className="focus:outline-[#22AB59] p-2 rounded-md w-full">
                <option value="Worker">Worker</option>
                <option value="TaskCreator">TaskCreator</option>
              </select>
              </div>
            {error && <p className="text-red-600">{error}</p>}
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-[#22AB59] w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <ImSpinner9 className="text-2xl animate-spin m-auto" />
              ) : (
                "Create"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#22AB59] text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
