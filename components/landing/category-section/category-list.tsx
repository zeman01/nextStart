import React from 'react'
import Card from './category-card'
import { ICategory } from '@/types/category.types';
import DataNotFound from '@/components/common/data-not-found';
import ComponentLoading from '@/components/common/component-loading';
type IProps = {
  isLoading: boolean;
  categories: ICategory[]
}

const CategoryList: React.FC<IProps> = ({ isLoading, categories }) => {

  return (
    <div>

      {/* loading */}
      {isLoading && <ComponentLoading />}

      {/* list category */}
      {!isLoading && categories.length > 0 && <div className='mt-4 grid grid-cols-4 gap-4'>
        {
          categories.map((category) => <Card key={category._id} category={category} />)
        }
      </div>}

      {/* empty data */}
      {
        !isLoading && categories.length === 0 && <DataNotFound />

      }

    </div>
  )
}

export default CategoryList