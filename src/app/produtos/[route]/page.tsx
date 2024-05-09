/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import goBack from '@/assets/icons/goBack.svg'

import styles from './styles.module.css'
import BASE_URL from '@/hooks/axios'
import Link from 'next/link'

interface IProduct {
  id: string,
  image: string
  name: string
  link: string
  description: string
}

async function getData({ route } : { route: string }) {
  return BASE_URL.get<IProduct>(`/find-product/${route}`)
    .then((data) => data.data)
}

async function ProductsDetails ({ params }: { params: { route: string } }) {
  const data = await getData({ route: params.route })

  return (
    <div className={styles.products_details}>
      <Link
        className={styles.product_goBack_container}
        href={'/produtos'}
      >
        <Image
          src={goBack}
          className={styles.product_goBack_icon}
          alt='icone de voltar'
        />

        <p>Voltar</p>
      </Link>

      <div className={styles.product_container}>
        <div className={styles.products_details_container}>
          <img
            alt={`imagem do produto ${data.name}`}
            src={data.image}
            className={styles.product_image}
          />
          <div>
            <div className={styles.text_container}>
              <p className={styles.title}>
                {data.name}
              </p>
              {data.description.split('\n').map((item) =>(
                <p className={styles.text} key={item}>
                  {item || <br />}
                </p>
              ))}
            </div>

            <div className={styles.buttons_container}>
              <a
                className={styles.contac_button}
                href={data.link}
                target='_blank'
                >
                Entrar em contato
              </a>
              {data.link && (
                <a className={styles.catalog_button}
                  target='_blank'
                  href={data.link}
                >
                  Baixar catálogo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetails