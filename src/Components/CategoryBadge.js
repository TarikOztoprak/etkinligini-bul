import React from 'react'
import "../Assets/Styles/CategoryBadge.css"
function CategoryBadge(props) {
  return (
    <div className='Category-Badge'>
        {props.category}
    </div>
  )
}

export default CategoryBadge