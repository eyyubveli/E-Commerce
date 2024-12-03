import React from 'react'
import Garden from "../../img/garden.jpg";
import "./Landscape.scss";

const Landscape = () => {
    return (
        <section className='landscape'>
            <div className="container">
                <div className="landscape-wrapper">
                    <div className="landscape-left">
                        <h2 className='landscape-title'>Landscape Gardening</h2>
                        <div className="landscape-body">
                            <p>  Whether it is growing your own food or setting
                                up your roof-top garden, we provide the highest
                                quality landscaping services, contributing to a greener world and substantial living!
                            </p>
                            <p>
                            Schedule your service appointment today!
                            </p>
                            <i> *Service only available in Telangana and AndhraPradesh.</i>
                        </div>
                        <button className='landscape-btn' type='button'>Book Now!</button>
                    </div>
                    <div className="landscape-right">
                        <img src={Garden} alt="Landscape Gardening" title='Landscape Gardening' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landscape