import { ArrowRight } from "lucide-react";
import rectangle4 from "@/assets/asset 44.webp";
export function AffiliateProgram() {
  return (
    <section className="relative py-16 overflow-hidden ">
      <div className="absolute -z-10 right-0 flex justify-end ">
        <img
          src={rectangle4}
          alt="affiliate background image "
          className="bg-center bg-contain bg-no-repeat w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Affiliate Program
          </h2>
          <p className="max-w-2xl mx-auto text-white/90 text-lg">
            Earn commissions by promoting Rejuvenexx! Gain access to exclusive
            resources, track your performance in real time, and accelerate your
            growth with us.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-1 mb-12">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-black/30 w-full sm:w-62 backdrop-blur-sm rounded-sm overflow-hidden shadow-xl"
            >
              <div className="h-80  overflow-hidden relative">
                <img
                  src={`src/assets/affiliate-${item}.webp`}
                  alt={`Affiliate partner ${item}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target;
                    target.src = `/placeholder.svg?height=192&width=320`;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <h3 className="font-bold text-xl mb-1">DEREK</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-black border-4 border-white text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-blue-50 transition-colors">
            Sign Up
            <span className="bg-[#9BEDFF] rounded-full p-1">
              <ArrowRight className="w-6 h-6  text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
