import React from 'react';
// router-dom
import { Link } from 'react-router-dom';
// component
import SimpleAccordion from "../components/Layout/SimpleAccordion";
// i18next
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



export const HelperPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='helper__wrapper h-full'>

            <div className="helper__header">
                <div className="header__tittle">
                    <h2>{t("app_helper_head_tittle")}</h2>
                </div>
            </div>

            <div className="container">
                <div className="helper__body py-4">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left__helper">
                                <span>{t("app_helper_left_head")}</span>
                                <Link to="/">{t("app_helper_left_down")}</Link>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="right__helper">
                                <div className="row">
                                    <div className="col-lg-12 mb-2">
                                        <h2 className='text-2xl font-bold'>{t("app_helper_accordion_head")}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SimpleAccordion />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default HelperPage
