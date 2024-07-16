'use client'
import React, { useState, useCallback, useEffect } from 'react'

import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { Category, ExpandLess, ExpandMore } from "@mui/icons-material";

import { IGroups } from '@/utils/interfaces';

import styles from './styles.module.css'
import BASE_URL from '@/hooks/axios';
import Link from 'next/link';

export default function CollapseMenuMobile () {
  const [groups, setGroups] = useState<IGroups[]>([])
  const [openProducts, setOpenProducts] = useState<boolean>(false)
  const [openGroup, setOpenGroup] = useState<string>('')

  const getDate = async () => {
    return await BASE_URL.get<IGroups[]>('/groups')   
      .then((response) => setGroups(response.data))
  }

  useEffect(() => {
    getDate()
  }, [])

  const handleClickProduct = useCallback(() => {
    setOpenProducts(!openProducts);
  }, [openProducts])

  const handleClick = useCallback((id: string) => {
    if(openGroup && openGroup === id) {
      setOpenGroup('');
    } else {
      setOpenGroup(id);
    }
  }, [openGroup])

  return (
    <List
      className={styles.list}
    >
      <ListItemButton
        onClick={handleClickProduct}
        className={styles.list_title_container}
      >
        <ListItemText
          primary='Produtos'
        />
        {openProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse
        in={openProducts}
        timeout="auto"
        unmountOnExit
        className={styles.collapse_container}
      >
        <List>
          <Link
            href={'/produtos'}
            className={styles.link}
          >
            Destaques
          </Link>

          {groups?.map((group) => group.categories.length > 0 && (
            <div
              key={group.id}
            >
              <ListItemButton
                onClick={() => handleClick(group.id)}
                className={styles.category_button}
              >
                <ListItemText primary={group.group_name} />
                {openGroup ? <ExpandLess className={styles.collapse_icon} /> : <ExpandMore className={styles.collapse_icon} />}
              </ListItemButton>
              <Collapse
                in={openGroup === group.id}
                timeout="auto"
                unmountOnExit
              >
                <div
                  className={styles.categories_container}
                >
                  {group.categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/produtos/categoria/${category.id}`}
                      className={styles.link_category}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </Collapse>
            </div>
          ))}
        </List>
      </Collapse>
    </List>
  )
}