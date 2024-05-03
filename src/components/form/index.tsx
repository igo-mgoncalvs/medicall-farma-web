'use client'

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify'

import BASE_URL from "@/hooks/axios";

import styles from './styles.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { PhoneMask } from "@/utils/phoneMask";

interface IContactForm {
  email: string
  phone: string
  infos: string
  product: string
  description: string
}

function ContactForm () {
  const { control, handleSubmit, reset, setValue } = useForm<IContactForm>()

  const onSubmit = (data: IContactForm) => {
    toast.info('Aguarde um instante', {
      position: "top-right",
      pauseOnHover: false,
      autoClose: false,
    });

    BASE_URL.post('/send-email', data)
      .then(() => {
        toast.dismiss()
        toast.success('E-mail enviado com sucesso!', {
          position: "top-right",
          pauseOnHover: false,
          autoClose: false,
        });

        setValue('description', '')
        setValue('email', '')
        setValue('infos', '')
        setValue('phone', '')
        setValue('product', '')
      })
      .catch(() => {
        toast.dismiss()
        toast.error('Erro ao enviar o e-mail', {
          position: "top-right",
          pauseOnHover: false,
          autoClose: 5000
        });
      })
  }

  return (
    <div className={styles.form_container}>
      <ToastContainer />
      <p className={styles.form_title}>Entre em contato</p>

      <form className={styles.form}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Esse campo é obrigatório'
            }
          }}
          render={({field: { onChange, value }, fieldState: { error }}) => (
            <input
              className={styles.input}
              value={value}
              onChange={onChange}
              placeholder="Digite seu e-mail"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Esse campo é obrigatório'
            }
          }}
          render={({field: { onChange, value }, fieldState: { error }}) => (
            <input
              className={styles.input}
              value={value}
              onChange={(e) => onChange(PhoneMask(e.target.value.slice(0, 15)))}
              placeholder="Digite seu telefone"
            />
          )}
        />
        <Controller
          name="infos"
          control={control}
          render={({field: { onChange, value }}) => (
            <input
              className={styles.input}
              value={value}
              onChange={onChange}
              placeholder="Sobre o que deseja informações?"
            />
          )}
        />
        <Controller
          name="product"
          control={control}
          render={({field: { onChange, value }}) => (
            <input
              className={styles.input}
              value={value}
              onChange={onChange}
              placeholder="Sobre qual produto deseja saber?"
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Esse campo é obrigatório'
            }
          }}
          render={({field: { onChange, value }, fieldState: { error }}) => (
            <textarea
              onChange={onChange}
              value={value}
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