import React from "react";

function CategoryFilter({categories, onSelectCategory,  selectCategory}) {
  const categoryBtns = categories.map((cat, index)=>{
    const className = cat === selectCategory ? "selected" : null;
   return(
    <button 
    key={index} 
    className={className}
     onClick={() => onSelectCategory(cat)}>
      {cat}
    </button>
   )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;