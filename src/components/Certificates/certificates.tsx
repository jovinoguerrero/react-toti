import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';
//@ts-ignore
import * as S from './styles.tsx';
import cert1 from '../../assets/certificates/cert-toti.jpg';
import cert2 from '../../assets/certificates/certPO.jpg';
import cert3 from '../../assets/certificates/cert-metdev.jpg';
import cert4 from '../../assets/certificates/cert-liderança-na-pratica.jpg';
import cert5 from '../../assets/certificates/cert-futuros.jpg';
import cert6 from '../../assets/certificates/cert-react-toti.jpg';

SwiperCore.use([Navigation, Autoplay]);

export default function Certificates () {

    const slides = [
        {id: 1, image: cert1, },
        {id: 2, image: cert2, },
        {id: 3, image: cert3, },
        {id: 4, image: cert4, },
        {id: 5, image: cert5, },
        {id: 6, image: cert6, },
    ];

    const params = {
        slidesPerView: 1,
        loop: true,
        pagination: true,
        navigation: true,
        autoplay: true,
    };

    return (
        <>
            <div style={{backgroundColor:'#171e24', display: 'flex'}}>
                <S.Container>
                    <S.Title variant="h3" component="h2">
                        Certificados
                    </S.Title>
                    <S.StyledSwiper id='main' tag='ul' {...params}>
                        {slides.map(slide =>
                            <SwiperSlide key={slide.id} tag='li' style={{listStyle:'none'}}>
                                <img
                                    src={`${slide.image}`}
                                    alt={`${slide.id}`}
                                    width={500}
                                />
                            </SwiperSlide>
                        )}
                    </S.StyledSwiper>
                </S.Container>
            </div>
        </>
    )
}
