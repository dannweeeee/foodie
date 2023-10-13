import React, { useState } from 'react'
import Data from './../../shared/Data.js'
import Image from 'next/image.js'

function CategoryList() {
    const [categoryList, setCategoryList] = useState(Data.CategoryListData)
    const [selectedCategory, setSelectedCategory] = useState();
  return (
    <div>
      <h2 className='font-bold'>Select Food Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoryList.map((item, index) => (
          <div className={`flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer border-purple-400
            ${selectedCategory == index? "grayscale-0 border-[1px]" : null }`}
            onClick={() => setSelectedCategory(index)}
          >
            <Image src={item.icon} alt={item.name} width={40} height={40} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
