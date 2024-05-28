/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react'
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
  enable: boolean
}

interface IPrivacyPolicy {
  title: string 
  text: string
  enable: boolean
}


function SuppliersScreen () {
  const [suppliers, setSuppliers] = useState<IClientsAndSuppliers[]>()
  const [clients, setClients] = useState<IClientsAndSuppliers[]>()
  const [interfaceData, setInterfaceData] = useState<ISuppliersInterface>()
  const [privacyPolicy, setPrivacyPolicy] = useState<IPrivacyPolicy>()
  
   const getData = async () => {
    return await Promise.all([
      (await BASE_URL.get<IClientsAndSuppliers[]>('/suppliers')).data,
      (await BASE_URL.get<IClientsAndSuppliers[]>('/clients')).data,
      (await BASE_URL.get<ISuppliersInterface>('/suppliers-interface')).data,
      (await BASE_URL.get<IPrivacyPolicy>('/privacy-policy')).data
    ])
      .then(([getSuppliers, getClients, getInterfaceData, getPrivacyPolicy]) => {
        setSuppliers(getSuppliers)
        setClients(getClients)
        setInterfaceData(getInterfaceData)
        setPrivacyPolicy(getPrivacyPolicy)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (suppliers && clients && interfaceData && privacyPolicy) && (
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

          {interfaceData.text.split('\n').map((item) =>(
            <p className={styles.suppliers_text} key={item}>
              {item || <br />}
            </p>
          ))}
        </div>
      </div>

      {suppliers.length > 0 && (
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
        )
      }
      
      {clients.length > 0 && (
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

          <div className={styles.suppliers_list_background}>
            <div
              className={styles.suppliers_list}
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
      )}

      <div
        className={styles.privacy_policy_container}
        id='politica-de-privacidade'
      >
        <div className={styles.policy_center}>
          <p className={styles.privacy_policy_title}>{privacyPolicy.title}</p>

          {privacyPolicy.text.split('\n').map((item) =>(
            <p key={item} className={styles.policy_text}>
              {item || <br />}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SuppliersScreen