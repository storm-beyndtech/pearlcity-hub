import user1 from "../assets/Reviews/user-1.svg";
import user2 from "../assets/Reviews/user-2.svg";

  import { Swiper, SwiperSlide } from "swiper/react";
  import { FreeMode, Autoplay } from "swiper/modules";
  import { useEffect, useState } from 'react';
  

export default function Reviews() {
    const [slidesPerView, setSlidesPerView] = useState(0.96);
  
    useEffect(() => {
      const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 600) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(0.99);
        }
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  
  
  
    return (
          <div className="relative overflow-hidden max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl w-full lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Loved by business and individuals across the globe
              </h2>
            </div>
  
            <Swiper className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"           
              slidesPerView={slidesPerView}
              freeMode={true}
              spaceBetween={20}
              modules={[FreeMode, Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
              }}>
                {reviews.map((item, i) =>
                <SwiperSlide className="flex h-auto" key={i}>
                  <div className="flex flex-col bg-gray-800/30 rounded-xl">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base md:text-lg text-gray-400">
                        "{item.review}"
                      </p>
                    </div>
    
                    <div className="p-4 rounded-b-xl md:px-7 bg-slate-800">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-8 w-8 rounded-full object-cover sm:h-[2.875rem] sm:w-[2.875rem]" src={item.imgUrl} alt="Image Description" />
                        </div>
    
                        <div className="grow ms-3">
                          <p className="text-sm sm:text-base font-semibold text-gray-200">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                )}
            </Swiper>
  
            <div className="absolute bottom-0 end-0 transform lg:translate-x-32" aria-hidden="true">
            
            </div>
          </div>
    )
  }
  


const reviews = [
  {
    name: "Jenny Wilson",
    title: "Frontend Dev",
    review: "Learning at Pearlcity Hub was a game-changer, equipping me with real-world skills and unforgettable mentorship.",
    imgUrl: user1
  },
  {
    name: "Devon Lane",
    title: "Designer",
    review: "Pearlcity Hub transformed my career with hands-on training, expert guidance, and a supportive learning community.”",
    imgUrl: user2
  },
]