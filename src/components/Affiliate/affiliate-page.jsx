import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";

export function AffiliatePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreeToTerms: false,
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", loginForm);
    // Handle login logic here
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", registerForm);
    // Handle registration logic here
    // Redirect to success page
    window.location.href = "/affiliate-success";
  };

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-sm:pl-6">
          AFFILIATE AREA
        </h1>

        <p className="text-lg mb-12 max-w-4xl max-sm:pl-6">
          Join our Affiliate Area and partner with us to earn commissions while
          receiving dedicated support. By teaming up with us, you can help
          spread our mission and enjoy the benefits of a rewarding
          collaboration. Let's grow together!
        </p>

        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 md:pl-0 md:pr-10 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Login Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Login</h2>

              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <label htmlFor="username" className="block mb-2">
                    Username or email address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginForm.username}
                    onChange={handleLoginChange}
                    className="w-full px-4 py-2 rounded bg-white text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      className="w-full px-4 py-2 rounded bg-white text-black pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors mb-4"
                >
                  Login
                </button>

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={loginForm.rememberMe}
                    onChange={handleLoginChange}
                    className="mr-2"
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>

                <div>
                  <Link
                    to="/lost-password"
                    className="text-blue-400 hover:underline"
                  >
                    Lost your password?
                  </Link>
                </div>
              </form>
            </div>

            {/* Register Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Register</h2>

              <form onSubmit={handleRegisterSubmit}>
                <div className="mb-4">
                  <label htmlFor="firstName" className="block mb-2">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={registerForm.firstName}
                    onChange={handleRegisterChange}
                    className="w-full px-4 py-2 rounded bg-white text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="lastName" className="block mb-2">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={registerForm.lastName}
                    onChange={handleRegisterChange}
                    className="w-full px-4 py-2 rounded bg-white text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={registerForm.email}
                    onChange={handleRegisterChange}
                    className="w-full px-4 py-2 rounded bg-white text-black"
                    required
                  />
                </div>

                <p className="text-sm text-gray-300 mb-4">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-blue-400 hover:underline"
                  >
                    privacy policy
                  </Link>
                  .
                </p>

                <div className="flex items-start mb-6">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={registerForm.agreeToTerms}
                    onChange={handleRegisterChange}
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="agreeToTerms" className="text-sm">
                    I have read and agree to the website terms and conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
