import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    content:
      "Rejuvenexx has revolutionized how we approach peptide research. The quality of their products, paired with the intuitive peptide calculator, has made our work so much more efficient. Their customer support is unparalleled, always ready to provide guidance and answer any queries",
    author: "David J. Karem",
    position: "Research Scientist",
    avatar: "/avatars/david.png",
  },
  {
    id: 2,
    content:
      "Working with Rejuvenexx has transformed our laboratory's productivity. Their innovative solutions and reliable products have become essential to our daily operations. The technical team is always available to help with any challenges we face.",
    author: "Sarah L. Chen",
    position: "Lab Director",
    avatar: "/avatars/sarah.png",
  },
  {
    id: 3,
    content:
      "As a long-time partner, I've witnessed Rejuvenexx's commitment to excellence firsthand. Their dedication to advancing peptide research through cutting-edge technology and superior customer care sets them apart in the industry.",
    author: "Michael T. Rodriguez",
    position: "Chief Research Officer",
    avatar: "/avatars/michael.png",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-16 ">
      <div className="text-center sm:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What our partners <br />
          <span className="text-purple-500">say</span> about us
        </h2>
      </div>
      <div className="max-w-[1300px] mx-auto sm:bg-gradient-to-r from-[#28272c] to-[#292b31] rounded-2xl p-2 md:p-7 shadow-2xl">
        <div className="w-[99%] mx-auto sm:bg-gradient-to-r from-[#1e1e20] to-[#2b2c32] rounded-xl p-4 md:p-7 shadow-md shadow-gray-900 ">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center max-sm:mb-10">
                  <p className="text-center text-gray-300  italic mb-8 text-xs sm:text-sm md:text-md md:text-xl leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-purple-500">
                      <img
                        src={"/src/assets/asset 10.webp"}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target;
                          target.src = `/placeholder.svg?height=64&width=64`;
                        }}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold text-sm sm:text-xl text-white">
                        {testimonial.author}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-8">
            <div className="swiper-pagination"></div>
          </div>
        </div>

        <button className="swiper-button-prev absolute left-10 rounded-full p-6 shadow-lg z-10 transition-colors ">
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button className="swiper-button-next rounded-full p-6 shadow-lg z-10 transition-colors ">
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
}
