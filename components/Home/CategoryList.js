import React, { useState } from 'react'
import Data from './../../shared/Data.js'

function CategoryList() {
    const [categoryList, setCategoryList] = useState(Data.CategoryListData)
  return (
    <div>
      <h2 className='font-bold'>Select Food Category</h2>
    </div>
  )
}

export default CategoryList
