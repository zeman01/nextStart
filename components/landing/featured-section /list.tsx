'use client'

import { getFeatured } from '@/api/product.api'
import ComponentLoading from '@/components/common/component-loading'
import DataNotFound from '@/components/common/data-not-found'
import ProductCard from '@/components/product/card'
import { IProduct } from '@/types/product.types'
import { useQuery } from '@tanstack/react-query'



const FeaturedProductList = () => {

  const { data, isLoading } = useQuery({
    queryFn: getFeatured,
    queryKey: ['get-featured-products']
  })

  return (
    <div>
      {isLoading && <ComponentLoading/>}
      {!isLoading && data?.data?.length > 0 && <div className='mt-5 grid grid-cols-5 gap-3'>

        {
          data?.data?.map((product: IProduct) => <ProductCard key={product._id} product={product} />)
        }
      </div>}

      {
        !isLoading && data?.data?.length === 0 && <DataNotFound message='Featured products not found'/>
      }
    </div>
  )
}

export default FeaturedProductList