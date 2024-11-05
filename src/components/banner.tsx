import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
// import 'swiper/swiper.min.css';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Card } from './Card';

export function Banner() {
    SwiperCore.use([Autoplay]);
    const images = [
        {
            src: 'renan-TvCRYXwKhfQ-unsplash.jpg',
            alt: 'Banner 1',
            state: "São Paulo",
            country: "Brasil",
        },
        {
            src: 'yuri-catalano-vgYyAFeaAg0-unsplash.jpg',
            alt: 'Banner 2',
            state: "São Paulo",
            country: "Brasil",
        },
        {
            src: 'martti-salmi-pmuoY4hrpOs-unsplash.jpg',
            alt: 'Banner 3',
            state: "Toscana",
            country: "Itália",
        },
        {
            src: "city-of-gold-coast-O3ji6Tv0PtY-unsplash.jpg",
            alt: "Banner 4",
            state: "Queensland",
            country: "Austrália",
        },
        {
            src: "jan-weber-yVbPfo7jtMA-unsplash.jpg",
            alt: "Banner 5",
            state: "Ontário",
            country: "Canadá",
        },
        {
            src: "mario-dobelmann-etiCf-2QuXY-unsplash.jpg",
            alt: "Banner 6",
            state: "Baviera",
            country: "Alemanha",
        },
        {
            src: "cedric-vt-ua0SnGdN-m8-unsplash.jpg",
            alt: "Banner 7",
            state: "Île-de-France",
            country: "França",
        },
        {
            src: "alex-mesmer-k4qeHchRmm8-unsplash.jpg",
            alt: "Banner 8",
            state: "Hokkaido",
            country: "Japão",
        },
        {
            src: "joe-desousa-vxk-ghi-WZU-unsplash.jpg",
            alt: "Banner 9",
            state: "Île-de-France",
            country: "França",
        },
        {
            src: "ruben-hanssen-hng6DxzwjOY-unsplash.jpg",
            alt: "Banner 9",
            state: "Cusco",
            country: "Peru",
        },
    ]
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            allowTouchMove={false}
        >
            {
                images.map((image, i) => (
                    <SwiperSlide key={i}>
                        <picture className='relative'>
                            <img src={image.src} alt={image.alt} width={1440} height={725} className="w-full max-h-[45.31rem] bg-cover object-cover" />
                        
                            <Card className='absolute bottom-32 left-32'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-4xl font-bold text-white'>{image.state}</h1>
                                    <h2 className='text-2xl font-semibold text-white'>{image.country}</h2>
                                </div>
                            </Card>
                        </picture>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}