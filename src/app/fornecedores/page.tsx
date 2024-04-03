/* eslint-disable @next/next/no-img-element */

import suppliers_data from './suppliers.json'

import styles from './styles.module.css'
import Image from 'next/image'

function Suppliers () {
  return (
    <div>
      <img 
        src='https://i.postimg.cc/XJXRJ0HC/cc2953652c3d7b4f8a2e56515f6d19b3.jpg'
        alt='banner da pagina de fornecedores'
        className={styles.suppliers_image}
      />

      {suppliers_data.data.map((group) => (
        <div
          key={group.id}
          className={styles.suppliers_group}
        >
          <div
            className={styles.suppliers_title_container}
          >
            <p
              className={styles.suppliers_title}
            >
              {group.group_name}
            </p>
          </div>

          <div
            className={styles.suppliers_list}
          >
            {group.list.map((item) => (
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
      ))}
    </div>
  )
}

export default Suppliers