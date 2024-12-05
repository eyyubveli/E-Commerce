import React from 'react'
import { plantersItems, saleItems, trendingItems } from '../../items/items'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const SearchingPlants = () => {
    const inputValue = useSelector(state => state.products.inputValue);
    const allItems = [...plantersItems, ...saleItems, ...trendingItems];
    const navigate = useNavigate();
    if (!inputValue) return;

    const matchingItems = allItems.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));

    const handleClick = (id) => {        
        if (id) {
            navigate(`/product-details/${id}`);
        }
    }

    return (
        <div className="matching">
            {
                matchingItems.length > 0 ?
                    matchingItems.map(item =>
                        <div className="items" key={item.id} onClick={() => handleClick(item.id)}>
                            <img width={80} height={80} src={item.img} alt={item.alt} title={item.title} />
                            <span>{item.title}</span>
                        </div>
                    ) : (<p>No matching items</p>)
            }
        </div>
    )
}

export default SearchingPlants