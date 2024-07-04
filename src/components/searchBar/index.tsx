'use client'

import React, { useState, useEffect, useCallback } from 'react'

import Image from 'next/image'

import search_logo from '@/assets/icons/search.svg'
import { IProduct } from '@/utils/interfaces'
import BASE_URL from '@/hooks/axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import styles from './styles.module.css'
import { LoadingButton } from '@mui/lab'

export default function SearchBar () {
  const [search, setSearch] = useState<string>('')
  const [searchProducts, setSearchProducts] = useState<IProduct[]>([])
  const [products, setProducts] = useState<IProduct[]>()
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useRouter()

  const getData = () => {
    BASE_URL.get<IProduct[]>('/all-products')
      .then(({data}) => {
        setProducts(data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if(search.length === 0) {
      setSearchProducts([])
    }
  }, [search])

  const searchRule = useCallback((name: string) => {
    const regex = new RegExp(search, 'i');
    return regex.test(name);
  }, [search])

  const handleSearch = useCallback(() => {
    setLoading(true)
    const filter = products?.filter((product) => searchRule(product.name)) || []

    if(filter?.length > 0) {
      setSearchProducts(filter)
      setLoading(false)
    } else {
      setSearchProducts([])
      setLoading(false)
    }
  }, [products, searchRule])

  return (
    <div className={styles.container}>
      <form className={styles.products_search_bar} onSubmit={(e) => e.preventDefault()}>
        <input 
          placeholder='Pesquise por produtos'
          onChange={(e) => setSearch(e.currentTarget.value)}
          value={search}
        />
        <button
          className={`${styles.search_button} ${search.length === 0 && styles.inactive_button}`}
          onClick={handleSearch}
        >
          {loading ? (
            <LoadingButton
              loading
            />
          ): (
            <>
              <Image
                width={16}
                height={16}
                src={search_logo}
                alt='icone de pesquisa'
                className={styles.products_search_bar_icone}
              />
              <p>
                Buscar
              </p>
            </>
          )}
        </button>
      </form>

      <div
        className={styles.products_container}
        style={{
          visibility: searchProducts?.length > 0 ? 'visible' : 'hidden'
        }} 
      >
        {searchProducts?.map((product, index) => index < 5 &&(
          <div
            key={product.id}
            className={styles.product_item}
            onClick={() => navigate.push(`/produtos/${product.id}`)}
          >
            <Image
              width={16}
              height={16}
              src={product.image}
              alt='icone de pesquisa'
              className={styles.product_image}
            />

            <div>
              <p
                className={styles.product_name}
              >
                {product.name}
              </p>
              <p>{product.summary}</p>
            </div>
          </div>
        ))}

        {searchProducts.length > 5 && (
          <div
            className={styles.more}
          >
            <Link
              href={`/produtos/busca?search=${search}`}
              onClick={() => setSearch('')}
            >
              Exibir mais produtos
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}