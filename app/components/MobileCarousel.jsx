import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/autoplay'; 
import 'swiper/css/navigation'


const MobileCarousel = ({ images }) => {
  
  return (
    <Swiper spaceBetween={1}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    }}
    modules={[Autoplay, Navigation]}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.url} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} className='imgMobileCarousel'/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileCarousel;
