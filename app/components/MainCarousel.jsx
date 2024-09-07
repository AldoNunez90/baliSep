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
      pauseOnMouseEnter: true,

    }}
    navigation={true}
    breakpoints={{
      320: { slidesPerView: 2 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    modules={[Autoplay, Navigation]}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.url} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto'}} className='imgMainCarousel'/>
          <div className='creditsMainCarousel creditsOverlay' onClick={() => onImageClick(index)}>
            <div className='creditsParagraph'>
              <p style={{marginBottom: '1rem'}}><strong>{image.title}</strong></p>              
          {Object.entries(image.details).map(([key, value], idx) => (
            <p key={idx} >
                  <strong>{key}:</strong>{' '}
                  <a href={value.link} target="_blank" rel="noopener noreferrer" style={{color: 'white'}} onClick={(event) => event.stopPropagation()} >
                    {value.name}
                  </a>
                </p>
              ))}
              </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainCarousel;
