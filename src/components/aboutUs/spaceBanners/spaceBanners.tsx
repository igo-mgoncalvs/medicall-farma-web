'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import styles from './styles.module.css'
import 'swiper/css';
import Image from 'next/image';

interface IBanners {
  id: string,
  image: string
}

export default function SpaceBanners ({ data }: { data: IBanners[]}) {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        425: {
          spaceBetween: 22,
        },
      }}
      className={styles.our_space_images_container}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
        >
          <Image
            src={item.image}
            alt='tetse'
            width={100}
            height={100}
            className={styles.our_space_image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}