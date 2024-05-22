import Image from 'next/image'

import styles from './styles.module.css'

export default function FloatWhatsapp ({ contact } : { contact: string }) {

  return (
    <a
      className={styles.container}
      href={contact}
      target='_blank'
    >
      <Image
        priority
        width={50}
        height={50}
        src={'https://firebasestorage.googleapis.com/v0/b/medicall-farma.appspot.com/o/file-3d22705e-e196-4acd-83b4-ec63a3561af9.svg.svg?alt=media&token=a29baca2-fee0-4aa6-9c0b-2fe3cab9bd70'}
        className={styles.logo}
        alt="Imagem do whatsapp"
      />
    </a>
  )
} 