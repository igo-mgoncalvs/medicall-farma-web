import React from 'react'

import PageProductsClient from '@/components/pageProductsClient/page';
import BASE_URL from '@/hooks/axios';
import products_data from './products.json'

interface IProduct {
  id: number
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
  return products_data.data
}

async function Products () {
  const data = await getData()

  return (
    <PageProductsClient data={data} />
  )
}

export default Products