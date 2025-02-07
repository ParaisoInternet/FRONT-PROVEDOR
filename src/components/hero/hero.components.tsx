import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://brechando.com/wp-content/uploads/2016/04/25-fatos-incr%C3%ADveis-sobre-a-Internet.jpg",
  "https://t.ctcdn.com.br/qBjjaHDY5ckvIJv2HPIwA0n5rYE=/1200x675/smart/i797289.jpeg",
  "https://t2.tudocdn.net/662812?w=1920",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[300px] md:h-[400px] lg:h-[550px] flex items-center"
    >
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
              className="w-full h-full bg-cover bg-center"
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
    </section>
  );
};

export default Hero;
