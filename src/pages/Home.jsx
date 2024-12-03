import React from 'react';
import Plants from '../Components/Plants/Plants';
import Selling from '../Components/Selling/Selling';
import Trending from '../Components/Trending/Trending';
import Blog from '../Components/Blog/Blog';
import Sale from '../Components/Sale/Sale';
import Planters from '../Components/Planters/Planters';
import Landscape from '../Components/Landscape/Landscape';
import Celeb from '../Components/Celeb/Celeb';

const Home = () => {
    return (
        <>
            <Plants />
            <Selling/>
            <Trending/>
            <Blog/>
            <Sale/>
            <Planters/>
            <Landscape/>
            <Celeb/>
        
        </>
    )
}

export default Home