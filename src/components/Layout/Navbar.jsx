import React, { useState, useEffect } from 'react'

// helpers
import { navbarRoutes, navbarLogin } from "../../helpers/navbarRoutes";
import { defaultLanguage } from '../../helpers/constants';
// router link
import { Link } from 'react-router-dom';

// components
import Button from './Button';
// i18next
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



export const Navbar = () => {
    const [language, setLanguage] = useState(defaultLanguage);
    const [isChangeLang, setIsChangeLang] = useState(false);

    useEffect(() => {
        if (isChangeLang) {
            setLanguage("Ru");
        } else {
            setLanguage(defaultLanguage);
        }
    }, [isChangeLang])

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        setIsChangeLang(!isChangeLang);
        i18next.changeLanguage(language.toLowerCase());
    };


    return (
        <div>
            <header>
                <div className="header__top">
                    <div className="container mx-auto flex justify-between">
                        <div className="left_header__top">
                            <nav>
                                <ul>
                                    {
                                        navbarRoutes.map(({ id, name, url }) => {
                                            return (
                                                <Link key={id} to={url}>{name}</Link>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div className="rigt_header__top">
                            <div className="contact">
                                <ul className='contact'>
                                    <span>{t("app_support")}:</span> <Link to={"(012)599-08-01"}>(012)599-08-01</Link>
                                    <Link to={"(012)505-77-55"}>(012)505-77-55</Link>
                                </ul>
                            </div>

                            <ul>
                                <li onClick={toggleLanguage}><span>{language}</span></li>
                                {
                                    navbarLogin.map(({ id, name, url, icon }) => {
                                        return (

                                            <li key={id}><Link to={url}> <span>{icon}</span>{t(name)}</Link></li>


                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="container mx-auto">
                        <div className="left_header-bottom">
                            <div className="logo">
                                <Link to="/"><h1>TURBO.AZ</h1></Link>
                            </div>
                            <ul className='simple'>
                                <li><Link to="/">{t("app_all_ads")}</Link></li>
                                <li><Link to="/avtosalonlar">{t("app_car_shop")}</Link></li>
                                <li>
                                    <Link>{t("app_accessory")}</Link>
                                    <ul className='dropdown'>
                                        <li><Link to="https://tap.az/elanlar/neqliyyat" target="_blank" >{t("app_dropdown_accessory")}</Link></li>
                                        <li><Link to="https://tap.az/elanlar/neqliyyat" target="_blank">{t("app_dropdown_audi")}</Link></li>
                                        <li><Link to="https://tap.az/elanlar/neqliyyat" target="_blank">{t("app_dropdown_auto")}</Link></li>
                                        <li><Link to="https://tap.az/elanlar/neqliyyat" target="_blank">{t("app_dropdown_reserve")}</Link></li>
                                        <li><Link to="https://tap.az/elanlar/neqliyyat" target="_blank">{t("app_dropdown_gps")}</Link></li>
                                        <li><Link to="https://tap.az/elanlar/neqliyyat" target="_blank">{t("app_dropdown_register")}</Link></li>
                                        <li><Link to="https://tap.az/elanlar/neqliyyat" target="_blank">{t("app_dropdown_video")}</Link></li>
                                        <li><Link to="https://tap.az/elanlar/neqliyyat" target="_blank">{t("app_dropdown_wheel")}</Link></li>
                                        <li><Link to="https://tap.az/elanlar" target="_blank">{t("app_dropdown_other")}</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="right_header-bottom">
                            <div className="button">
                                <Button content={t("app_new_button")} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
