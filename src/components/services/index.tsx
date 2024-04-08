/* eslint-disable @next/next/no-img-element */
'use client'

import useWindowSize from "@/hooks/useWindowSize"

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.css'
import Image from "next/image";

interface IServicesList {
  id: string,
  title: string
  text: string
  icon: string
  image: string
}

interface IServices {
  data: {
    image: string
    title: string
    list: IServicesList[]
  }
}

export default function Services ({ data }: IServices){
  let activeSlide = 0

  const size = useWindowSize()
  
  return (
    <div>
      {size.width < 768 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1.15}
          className={styles.our_services_list}
        >
          {data.list.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={styles.mobile_service_item}
            >
              {({ isActive }) => {
                if(isActive) {
                  activeSlide = index
                }
                return (
                  <>
                    <Image
                      src={item.image}
                      width={120}
                      height={120}
                      alt="icone-do-serviço"
                      className={styles.mobile_service_image}
                    />
                    <div>
                      <div className={styles.our_services_item_title}>
                        <Image 
                          src={item.icon}
                          width={21}
                          height={16}
                          alt="icone-do-serviço"
                        />
                        <p>{item.title}</p>
                      </div>
                      <p className={styles.our_services_item_text}>{item.text}</p>
                    </div>
                  </>
                )}}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          className={styles.mobile_service_item_list}
        >
          {data.list.map(item => (
            <div key={item.id} className={styles.mobile_service_item}>
              <div className={styles.our_services_item_title}>
                <img 
                  src={item.icon}
                  alt="icone-do-serviço"
                  className={styles.our_services_item_icone}
                />
                <p>{item.title}</p>
              </div>
              <p className={styles.our_services_item_text}>{item.text}</p>
            </div>
          ))}
        </div>
      )}
      {size.width < 768 && (
        <div className={styles.our_services_card_indicator_container}>
          {data.list.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.our_services_card_indicator} ${activeSlide === index && styles.our_services_card_indicator_active}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}