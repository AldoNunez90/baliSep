import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import { useState, useEffect } from "react"; 
import "swiper/css";
import 'swiper/css/autoplay'; 
import 'swiper/css/navigation'

const SecondaryCarousel = ({ images }) => {
  const [loading, setLoading] = useState(true);

    // Simular carga de imágenes (opcional)
    useEffect(() => {
      setLoading(true)
      const loadImages = () => {
        const promises = images.map((image) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = image;
            img.onload = resolve;
          });
        });
  
        Promise.all(promises).then(() => setLoading(false));
      };
      loadImages();
    }, [images]);


  return (
    <div>
      {loading ? (<div className="custom-loader loaderProduccion"></div>) : 
      (<Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Autoplay, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>)
      }
    </div>
    
  );
};

export default SecondaryCarousel;
