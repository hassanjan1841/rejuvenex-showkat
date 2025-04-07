import { useState } from "react";
import { Phone, Mail, ArrowRight, Leaf } from "lucide-react";

export function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    // Handle form submission logic here
    alert("Your message has been sent. We will get back to you soon!");
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">CONTACT US</h1>

        <div className="bg-[#FFFFFF0D] border border-gray-700 shadow shadow-gray-500 backdrop-blur-sm rounded-xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div className="inline-block bg-black/30 rounded-full border border-white font-bold px-4 py-2">
                <span className="flex items-center justify-between gap-2">
                  <span className="text-white">
                    <Leaf size={24} />
                  </span>
                  <span className="text-white"> Get in Touch</span>
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                Got questions or need help? We're here for you—just send us a
                message!
              </h2>

              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">
                  Contact Info
                </h3>

                <div className="space-y-6 ">
                  <div className="flex items-start">
                    <div className="bg-purple-700 p-3 rounded-lg mr-4">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone Number</p>
                      <p className="text-xl">888-841-6566</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-700 p-3 rounded-lg mr-4">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email Address</p>
                      <p className="text-xl">orders@rejuvenexx.net</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 lg:pt-32">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    placeholder="EMAIL"
                    className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleChange}
                    placeholder="SUBJECT"
                    className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleChange}
                    placeholder="MESSAGE"
                    rows={6}
                    className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 rounded-full flex items-center gap-2 transition-colors"
                  >
                    Send
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
