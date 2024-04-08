'use client'

import React from "react";

import styles from './styles.module.css'
import { useForm, Controller } from "react-hook-form";

interface IContactForm {
  email: string
  phone: string
  infos: string
  product: string
  description: string
}

function ContactForm () {
  const { control, handleSubmit } = useForm<IContactForm>()

  const onSubmit = (data: IContactForm) => {
    console.log(data)
  }

  return (
    <div className={styles.form_container}>
      <p className={styles.form_title}>Entre em contato</p>

      <form className={styles.form}>
        <Controller
          name="email"
          control={control}
          render={({field: { onChange }}) => (
            <input
              className={styles.input}
              onChange={onChange}
              placeholder="Digite seu e-mail"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({field: { onChange }}) => (
            <input
              className={styles.input}
              onChange={onChange}
              placeholder="Digite seu telefone"
            />
          )}
        />
        <Controller
          name="infos"
          control={control}
          render={({field: { onChange }}) => (
            <input
              className={styles.input}
              onChange={onChange}
              placeholder="Sobre o que deseja informações?"
            />
          )}
        />
        <Controller
          name="product"
          control={control}
          render={({field: { onChange }}) => (
            <input
              className={styles.input}
              onChange={onChange}
              placeholder="Sobre qual produto deseja saber?"
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({field: { onChange }}) => (
            <textarea
              onChange={onChange}
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Descreva brevemente seu assunto"
            />
          )}
        />

        <button
          className={styles.submit_buttom}
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ContactForm