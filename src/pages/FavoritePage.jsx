import React from 'react';
import { useSelector } from 'react-redux';
import WipCard from "../components/Layout/WipCard";


const FavoritePage = () => {
    const cart = useSelector(item => item.Card);

    console.log(cart)


    return (
        <div className='favoritepage__wrapper'>
            <div className="container">
                <div className="favorite_list py-2">
                    {
                        cart.cart.map((item) => {
                            return (
                                <WipCard key={item.id} image={item.image} price={item.price} description={item.description} title={item.title} place={item.place} />
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default FavoritePage