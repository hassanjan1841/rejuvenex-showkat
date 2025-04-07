import { Link } from "react-router";
import { CheckCircle } from "lucide-react";

export function AffiliateSuccessPage() {
  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AFFILIATE AREA</h1>

        <p className="text-lg mb-12 max-w-4xl">
          Join our Affiliate Area and partner with us to earn commissions while
          receiving dedicated support. By teaming up with us, you can help
          spread our mission and enjoy the benefits of a rewarding
          collaboration. Let's grow together!
        </p>

        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 md:p-10 flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-8 max-w-xl w-full text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle size={48} className="text-green-500" />
            </div>

            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>

            <p className="mb-2">
              Your request has been registered and it is awaiting the
              administrators' approval!
            </p>
            <p>You will get an email soon.</p>

            <div className="mt-8">
              <Link
                to="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
