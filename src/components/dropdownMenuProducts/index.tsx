import React, { useEffect, useState } from "react";

import arrow from '@/assets/icons/arrow.svg'

import styles from './styles.module.css'
import Image from "next/image";
import Link from "next/link";
import { IGroups } from "@/utils/interfaces";
import BASE_URL from "@/hooks/axios";

export default function DropdownMenuProducts () {
  const [open, setOpen] = useState<string>('');
  const [select, setSelect] = useState('')
  const [groups, setGroups] = useState<IGroups[]>([])

  useEffect(() => {
    const getDate = async () => {
      return await BASE_URL.get<IGroups[]>('/groups')   
        .then((response) => setGroups(response.data))
    }

    getDate()
  }, [])

  return (
    <div>
      <div className={styles.content}>
        <div
          className={styles.groups_container}
        >
          {groups.map((item) => item.categories.length > 0 && (
            <div
              key={item.id}
              onMouseEnter={() => setOpen(item.group_name)}
              onMouseLeave={() => setOpen('')}
              className={styles.group_button}
            >
              <p>{item.group_name}</p>

              {item.categories?.length && (
                <div
                className={`${styles.menu} ${open === item.group_name ? styles.open : styles.closed}`}
                >
                  {item.categories?.map((item) => (
                    <Link
                      key={item.id}
                      href={`/produtos/categoria/${item.id}`}
                      className={styles.category}
                      onClick={() => setSelect(item.name)}
                    >
                      <Image
                        src={arrow}
                        alt='icone whatsapp'
                        className={styles.category_icon}
                      />
                      <p>{item.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}