/* eslint-disable @next/next/no-img-element */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import styles from './styles.module.css'
import 'swiper/css';

interface IBanners {
  id: string
  image: string
  description: string
}

export default function MainBanners({ data }: { data: IBanners[] }) {
  return (
    <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        modules={[Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={`banner ${item.description}`}
              className={styles.banner}
            />
          </SwiperSlide>
        ))}
      </Swiper>
  )
}