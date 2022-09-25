import Category from './Category/Category'
import React from 'react'

const CategoryContainer = () => {
    return (
    <div className="category-container">
      <Category className ="Hypoallergenic" id="Hypoallergenic"/>
      <Category className="Vegan" id="Vegan"/>
      <Category className="Cruelty-Free" id="cruelty+free"/>
      <Category className="No-Talc" id="No+Talc"/>
      <Category className="Alchohol-Free" id="acohol+free"/>
      <Category className="Silicone-Free" id="silicone+free"/>
      <Category className="Oil-Free" id="oil+free"/>
      <Category className="Peanut-Free"/>
    </div>  
    );
}

export default CategoryContainer;