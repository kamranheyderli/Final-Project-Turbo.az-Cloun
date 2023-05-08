import React from 'react';
// router-dom
import { Link } from "react-router-dom";
// components
import ShopCard from "../components/Layout/SalonCard";
// helper
import {shopCard}from "../helpers/shopCard";


export const CarShop = () => {
    return (
        <div>
            <div className="carshop__wrapper py-2">
                <div className="container">
                    <div className="row">
                        <div className="carshop__title">
                            <h2>RƏSMİ NÜMAYƏNDƏLƏR</h2>
                            <Link to="https://www.kapitalbank.az/cards/"><img src="https://cdn.digit.az/KAPITALBANK/2022/3/kapital.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="carshop__body flex flex-wrap gap-x-5">
                            {
                                shopCard.map((item) => {
                                    return (
                                        <ShopCard image={item.image} title={item.title} description={item.description} place={item.place} phone={item.phone} />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarShop
