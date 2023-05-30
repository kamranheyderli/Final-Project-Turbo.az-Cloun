import React from 'react';
// react hooks
import { useState } from 'react';
// components
import WipCard from "../components/Layout/WipCard";
import MultipleSelect from "../components/FiltersInput/MultSelect/MarkaSelect";
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
// react icon
import { IoIosArrowDown } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";


export const Home = () => {
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const openDetails = (e, id) => {
        e.preventDefault()
        navigate(`/details/${id}`);
    };

    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (selected) => {
        setSelectedFilters(selected);
        console.log(selectedFilters)
    };
    return (
        <div>
            {/* start Filters section */}
            <section className="filtr__wrapper">
                <div className="container">
                    <div className="top__filter flex flex-wrap items-center py-2">
                        <MultipleSelect content={t("app_input_marka")} onChange={handleFilterChange} />
                        <MultipleSelect content={t("app_input_model")} onChange={handleFilterChange} />
                        <ToggleCheck />
                        <MultipleSelect content={t("app_input_city")} />
                    </div>

                    <div className="mid_filter flex flex-wrap justify-between items-center mt-1 px-2 gap-x-2">
                        <div className="price_input">
                            <SimpleTextField label1={t("app_input_price")} label2="max" />
                        </div>
                        <div className="price_filter_select flex flex-wrap gap-x-3">
                            <SimpleSelect />
                            <SimpleCheck content={t("app_input_kredit")} />
                            <SimpleCheck content={t("app_input_barter")} />
                        </div>

                        <div className=" flex flex-wrap justify-center items-center gap-x-2">
                            <MultipleSelect content={t("app_input_ban")} />
                            <MultipleSelect content={t("app_input_years")} />
                        </div>


                    </div>

                    <div className="bottom_filter flex justify-between items-center flex-wrap py-1 px-2">
                        <div className="left_bottom_filter cursor-pointer">
                            <span>{t("app_new_elans")} <Link to="/">1467 Elan</Link></span>
                        </div>
                        <div className="right_bottom_filter flex items-center  flex-wrap gap-x-5">
                            <div className="reset cursor-pointer">
                                <span className='text-red-600 text-[15px] font-medium'>{t("app_reset")}</span>
                            </div>
                            <div className="more_info flex items-center text-red-600 text-[15px] font-medium gap-x-1 cursor-pointer">
                                <span>{t("app_more_filters")}</span>
                                <IoIosArrowDown className='text-[20px]' />
                            </div>
                            <div className="search pr-2">
                                <button className='search_button cursor-pointer'>{t("app_search_button")}</button>
                            </div>
                        </div>
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
                    <div className="row gap-y-2">
                        {

                            WipCardData.filter((item) => selectedFilters.length === 0 || selectedFilters.find((el) => el === item.categories)).map((item) => {
                                return (
                                    <WipCard key={item.id} id={item.id} image={item.image} price={item.price} description={item.description} title={item.title} place={item.place} onClick={e => openDetails(e, item.id)} />
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
                    <div className="row gap-y-2">
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
            {/* scrool to tip */}
            <section>
                <div className="scrool_to_top">
                    <ScrollToTop smooth="true"  color='red'/>
                </div>
            </section>



        </div>
    )
}

export default Home
