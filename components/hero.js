import React from 'react';
import { Autoplay, EffectFade, Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Button, Container } from '@mui/material';
import { CustomSlide } from '../utils/styles';
import { Box } from '@mui/system';

import styles from '../styles/Hero.module.css';
import 'swiper/css';
import UnstyledButtonCustom from './svg/ButtonSvg';

const params = {
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
};
const images = [
  '/images/home-1.jpg',
  '/images/home-2.jpg',
  '/images/home-3.jpg',
  '/images/home-4.jpg',
];

export default function Hero() {
    SwiperCore.use([Autoplay, EffectFade]);
    return (
        <div className={styles.heroBox}>
            <Swiper {...params}>
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <div 
                            className={styles.heroSlide}
                            style={{
                                backgroundImage: `url("${image}")`
                            }} 
                        >
                          <Button variant='outlined' size='large' sx={{ p: '10px 100px' }}  > Link 1</Button>
                          <UnstyledButtonCustom />
                          
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
} 