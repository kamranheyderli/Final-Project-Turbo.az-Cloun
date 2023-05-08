import React from 'react';
// components
import WipCard from "../components/Layout/WipCard";
import { MultipleSelect } from "../components/FiltersInput/MultipleSelect";
import ToggleCheck from "../components/FiltersInput/ToggleCheck";
import SimpleTextField from "../components/FiltersInput/SimpleTextField";
import SimpleSelect from "../components/FiltersInput/SimpleSelect";
import SimpleCheck from "../components/FiltersInput/SimpleCheck";
// helpers
import { WipCardData } from "../helpers/cardData";
// react-router-dom
import { Link, useNavigate } from "react-router-dom";
// i18 next
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export const Home = () => {
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const openDetails = (e, id) => {
        e.preventDefault()
        navigate(`/details/${id}`);
    }




    return (
        <div>
            {/* start Filters section */}
            <section className="filtr__wrapper">
                <div className="container">
                    <div className="top__filter flex flex-wrap items-center mt-3">
                        <MultipleSelect content="Marka" />
                        <MultipleSelect content="Model" />
                        <ToggleCheck />
                        <MultipleSelect  content="Şəhər"/>
                    </div>


                    <div className="mid_filter flex flex-wrap items-center mt-2 px-2 gap-x-2">
                        <div className="price_input">
                            <SimpleTextField label1="Qiymət min" label2="max" />
                        </div>
                        <div className="price_filter_select flex flex-wrap gap-x-3">
                            <SimpleSelect />
                            <SimpleCheck content="Kredit" />
                            <SimpleCheck content="Barter" />
                        </div>

                        <div className=" flex flex-wrap justify-center items-center gap-x-2">
                            <MultipleSelect content="Ban növü" />
                            <MultipleSelect content="Il min/max" />
                        </div>


                    </div>

                    <div className="bottom_filter">
                        
                    </div>
                </div>

            </section>

            {/* START wipCARD SECTION */}
            <section className='wipcard_wrapper py-4'>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head__title flex-wrap px-2 mb-2">
                                <h2>{t("wip_announcement")}</h2>
                                <Link to="https://www.kapitalbank.az/cards/"><img src="https://cdn.digit.az/KAPITALBANK/2022/3/kapital.png" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            WipCardData.map((item) => {
                                return (
                                    <WipCard key={item.id} image={item.image} price={item.price} description={item.description} title={item.title} place={item.place} onClick={e => openDetails(e, item.id)} />
                                )
                            })
                        }

                    </div>
                </div>

            </section>
            {/* EnD wipCARD section  */}

            {/* START NEW ELANS SECTIONS */}
            <section className='newcard_wrapper py-2'>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head__title py-2 mb-2">
                                <h2>{t("lates_announcement")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            WipCardData.map((item) => {
                                return (
                                    <WipCard key={item.id} image={item.image} price={item.price} description={item.description} title={item.title} place={item.place} onClick={e => openDetails(e, item.id)} />
                                )
                            })
                        }
                    </div>
                </div>

            </section>
            {/* end new elans section */}




        </div>
    )
}

export default Home
