import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/autoplay'; 
import 'swiper/css/navigation'


const MainCarousel = ({ images, onImageClick }) => {
  return (
    <Swiper spaceBetween={25}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: true,
    }}
    navigation={true}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    onMouseEnter={(swiper) => swiper.autoplay.stop()} 
    onMouseLeave={(swiper) => swiper.autoplay.start()} 
    modules={[Autoplay, Navigation]}>
      {images.map((image, index) => (
        <SwiperSlide key={index} onClick={() => onImageClick(index)}>
          <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto', cursor: 'pointer' }} className='imgMainCarousel'/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainCarousel;
