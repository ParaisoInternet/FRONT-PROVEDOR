import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://scontent.fthe11-1.fna.fbcdn.net/v/t39.30808-6/475922413_1016475840528763_2712400172867478522_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mx6XnPnFznMQ7kNvgEA3RBH&_nc_zt=23&_nc_ht=scontent.fthe11-1.fna&_nc_gid=A4B-XaAGso0zC8oJ4xOtptN&oh=00_AYC87ZQiTTvvepnaxXWBIjKKZR5SyOCvnz_pCCz0lbHwpA&oe=67B011B4",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[400px] md:h-[675px] lg:h-[675px] flex items-center"
    >
      <div className="mt-20">
        {/* Slider de imagens */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="absolute inset-0 w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-auto bg-center mt-10"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Texto sobre a imagem 
      <div className="relative max-w-7xl mx-auto px-6 text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Internet de Alta Velocidade
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Conexão estável e suporte 24/7 para sua casa ou empresa.
        </p>
        <a
          href="#plans"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Ver Planos
        </a>
      </div>*/}
      </div>
    </section>
  );
};

export default Hero;
