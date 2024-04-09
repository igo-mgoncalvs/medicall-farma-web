/* eslint-disable @next/next/no-img-element */
import suppliers_data from './suppliers.json'
import clients_data from './clients.json'

import styles from './styles.module.css'
import BASE_URL from '@/hooks/axios'

interface IClientsAndSuppliers {
  id: string
  image: string
  name: string
}

interface ISuppliersInterface {
  title: string 
  text: string 
  secound_title: string 
  image: string 
}

async function getData() {
  return await Promise.all([
    (await BASE_URL.get<IClientsAndSuppliers[]>('/suppliers')).data,
    (await BASE_URL.get<IClientsAndSuppliers[]>('/clients')).data,
    (await BASE_URL.get<ISuppliersInterface>('/suppliers-interface')).data
  ])
}

async function Suppliers () {
  const [suppliers, clients, interfaceData] = await getData()

  return (
    <div>
      <div
        className={styles.suppliers_infos_container}
      >
        <img 
          src={interfaceData.image}
          alt='banner da pagina de fornecedores'
          className={styles.suppliers_image}
        />

        <div>
          <p
            className={styles.suppliers_title}
          >
            {interfaceData.title}
          </p>

          <p className={styles.suppliers_text}>
            {interfaceData.text}
          </p>
        </div>
      </div>

      <div
        className={styles.suppliers_group}
      >
        <div
          className={styles.suppliers_title_container}
        >
        </div>

        <div
          className={styles.suppliers_list}
        >
          {suppliers.map((item) => (
            <div
              key={item.id}
              className={styles.suppliers_logo}
              style={{
                backgroundImage: `url(${item.image})`
              }}
            />
          ))}
        </div>
      </div>
      
      <div
        className={styles.suppliers_group}
      >
        <div
          className={styles.suppliers_title_container}
        >
          <p
            className={`${styles.suppliers_title} ${styles.suppliers_title_section}`}
          >
            {interfaceData.secound_title}
          </p>
        </div>

        <div
          className={`${styles.suppliers_list} ${styles.suppliers_list_background}`}
        >
          {clients.map((item) => (
            <div
              key={item.id}
              className={styles.suppliers_logo}
              style={{
                backgroundImage: `url(${item.image})`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Suppliers