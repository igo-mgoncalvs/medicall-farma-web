export interface ILogos {
  logoColorId: string
  logoColor: string
  logoWhiteId: string
  logoWhite: string
}

export interface ICategory {
  id: string
  name: string
  productsGroupsId: string
  index: number
}

export interface IGroups {
  id: string
  group_name: string
  active: boolean,
  index: number,
  categories: ICategory[]
}

export interface IProduct {
  id: string
  index: number,
  image: string
  imageId: string
  route: string
  name: string
  favorit: boolean
  subTitle: string
  link: string
  summary: string
  whatsapp: string
  description: string
  active: boolean,
  productsGroupsId: string
  categoryId: string
  category: ICategory
}

export interface IProductsBanners {
  faviritFirst: string
  faviritSecound: string
  faviritFirstMobile: string
  faviritSecoundMobile: string
  detailsFirst: string
  detailsSecound: string
}

export interface IAddress {
  address: string
  link: string
}