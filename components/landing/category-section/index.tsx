'use client'
import ComponentHeading from '@/components/common/component-heading'
import React from 'react'
import CategoryList from './category-list'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '@/api/category.api'

const CategorySection = () => {

  //! network get req.
  const { data, isLoading } = useQuery({
    queryFn: getAllCategories,
    queryKey: ['get-all-categories']
  })

  return (
    <section className='mt-20 tracking-wider'>
      {/* heaing section */}
      <ComponentHeading
        title='Featured Categories'
        sub_title='Explore products by all our featured categories'
        link='#'
      />
      {/* list section */}
      <CategoryList isLoading={isLoading} categories={data?.data ?? []} />

    </section>
  )
}

export default CategorySection