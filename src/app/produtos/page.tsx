'use client'

import React, { useState, useEffect } from 'react'

import PageProductsClient from '@/components/pageProductsClient/page';
import BASE_URL from '@/hooks/axios';

import { IProduct } from '@/utils/interfaces';
interface IGroups {
  id: number,
  group_name: string,
  products_list: IProduct[],
  active: boolean
}


function Products () {
  const [data, setData] = useState<IProduct[]>()

  async function getData() {
    return await BASE_URL.get<IProduct[]>('/get-favorites')
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