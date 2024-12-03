import React from 'react'
import { plantersItems, saleItems, trendingItems } from '../../items/items'
import { useSelector } from 'react-redux'

const SearchingPlants = () => {
    const inputValue = useSelector(state => state.products.inputValue);
    const allItems = [...plantersItems, ...saleItems, ...trendingItems];
    
    if (!inputValue) return;

    const matchingItems = allItems.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));

    console.log(matchingItems);


    return (
        <div className="matching">
            {
                 matchingItems.length > 0 ? 
                    matchingItems.map(item =>
                        <div className="items" key={item.id}>
                            <img width={80} height={80} src={item.img} alt={item.alt} title={item.title} />
                            <span>{item.title}</span>
                        </div>
                    )  : (<p>No matching items</p>)
            }
        </div>
    )
}

export default SearchingPlants