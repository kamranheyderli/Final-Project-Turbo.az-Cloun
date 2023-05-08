import React from 'react'

export const ShopCard = ({title,description,place,image,phone}) => {
    return (
        
            <div className="shop__card">
                <div className="logo">
                    <img src={image} alt="" />
                </div>

                <div className="card_about">
                    <div className="card__title">
                        <h2>{title}</h2>
                    </div>
                    <div className="card__description">
                        <p>{description}</p>
                    </div>
                    <div className="card__contact">
                        <span>{phone}</span>
                    </div>
                    <div className="card__ads">
                        <span>{place}</span>
                    </div>
                </div>
            </div>

        
    )
}

export default ShopCard;
