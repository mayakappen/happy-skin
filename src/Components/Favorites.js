import React from "react";
import Product from './Product';

const Favorites = ({favorites}) => {

    return (
        <div className = 'favContainer'>
            {favorites.map(favorite => 
                <Product id={favorite.id} name={favorite.name} brand={favorite.price} price={favorite.price} price_sign={favorite.price_sign} rating={favorite.rating} api_image={favorite.api_featured_image} category={favorite.category} tag_list={favorite.tag_list} />
                )}
        </div>
    )
}

export default Favorites