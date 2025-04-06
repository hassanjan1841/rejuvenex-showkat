import { useState } from "react";

export function NewsletterSubscription() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreeToTerms: false,
    agreeToTexts: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
    alert("Thank you for subscribing to our newsletter!");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      agreeToTerms: false,
      agreeToTexts: false,
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#664B9E] to-[#1392D0] rounded-3xl w-full  sm:w-[80%] mx-auto mt-16 pt-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/90 text-lg">
            Want to get 15% OFF site-wide plus a FREE keychain? Subscribe to our
            newsletter to claim this offer!
          </p>
        </div>

        <div className="bg-transparent border border-white/90 rounded-lg py-12 px-4 backdrop-blur-sm w-full sm:w-[80%] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-white">
                  First Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-2 rounded bg-white text-gray-800 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-white">
                  Last Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-2 rounded bg-white text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-white">
                  Email <span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 rounded bg-white text-gray-800 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-white">
                  Phone <span className="text-red-300">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-2 rounded bg-white text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-2"
                />
                <label htmlFor="agreeToTerms" className="text-white text-sm">
                  I agree to{" "}
                  <a href="#" className="underline">
                    Terms and Conditions
                  </a>{" "}
                  provided by Rejuvenexx. By providing my phone number, I agree
                  to receive text messages from Rejuvenexx. I understand I can
                  SMS opt-out at any time by responding "Stop."
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTexts"
                  name="agreeToTexts"
                  checked={formData.agreeToTexts}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="agreeToTexts" className="text-white text-sm">
                  Text me with news and offers.
                </label>
              </div>

              <p className="text-white/70 text-xs">
                By signing up via text, you agree to receive recurring automated
                marketing messages and updates at the phone number provided.
                Reply STOP to unsubscribe.
              </p>
            </div>

            <button
              type="submit"
              className="w-full hover:cursor-pointer bg-[#34a2da] hover:bg-[#1392D0] text-white font-bold py-3 px-4 rounded transition-colors"
            >
              JOIN OUR NEWSLETTER
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
