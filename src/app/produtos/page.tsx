'use client'

import React, { useState, useEffect } from 'react'

import PageProductsClient from '@/components/pageProductsClient/page';
import BASE_URL from '@/hooks/axios';

interface IProduct {
  id: string
  image: string 
  name: string
  link: string
  description: string
  route: string
  summary: string
}

interface IGroups {
  id: number,
  group_name: string,
  products_list: IProduct[]
}


function Products () {
  const [data, setData] = useState<IGroups[]>()

  async function getData() {
    return await BASE_URL.get<IGroups[]>('/products')
    .then((response) => setData(response.data))
  }

  useEffect(() => {
    getData()
  }, [])

  return data && (
    <PageProductsClient data={data} />
  )
}

export default Products