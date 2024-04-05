/* eslint-disable @next/next/no-img-element */
import suppliers_data from './suppliers.json'
import clients_data from './clients.json'

import styles from './styles.module.css'

function Suppliers () {
  return (
    <div>
      <div
        className={styles.suppliers_infos_container}
      >
        <img 
          src='https://i.postimg.cc/XJXRJ0HC/cc2953652c3d7b4f8a2e56515f6d19b3.jpg'
          alt='banner da pagina de fornecedores'
          className={styles.suppliers_image}
        />

        <div>
          <p
            className={styles.suppliers_title}
          >
            Nossos Fornecedores
          </p>

          <p className={styles.suppliers_text}>Agradecemos aos nossos fornecedores importantes por sua colaboração contínua e pelo compromisso em fornecer produtos de alta qualidade.<br />Sua dedicação é fundamental para garantir que possamos atender às necessidades de nossos clientes e contribuir para o bem-estar da comunidade.
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
          {suppliers_data.suppliers.map((item) => (
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
            Nossos Clientes
          </p>
        </div>

        <div
          className={`${styles.suppliers_list} ${styles.suppliers_list_background}`}
        >
          {clients_data.clients.map((item) => (
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