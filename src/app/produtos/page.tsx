import React from 'react'

import PageProductsClient from '@/components/pageProductsClient/page';
import BASE_URL from '@/hooks/axios';

interface IProduct {
  id: string
  image: string 
  name: string
  link: string
  description: string
}

interface IGroups {
  id: number,
  group_name: string,
  products_list: IProduct[]
}

async function getData() {
  return await BASE_URL.get<IGroups[]>('/products')
  .then((response) => response.data)
}

async function Products () {
  const data = await getData()

  return (
    <PageProductsClient data={data} />
  )
}

export default Products