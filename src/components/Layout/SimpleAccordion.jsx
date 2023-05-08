import React, { Fragment } from 'react';
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

// i18 next
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export const SimpleAccordion = () => {
    const [open, setOpen] = useState(0);
    const { t, i18n } = useTranslation();

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },

    };
    return (
        <Fragment>
            <Accordion open={open === 1} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    {t("app_helper_accordion_questions1")}
                </AccordionHeader>
                <AccordionBody>
                    {t("app_helper_accordion_answer1")}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    {t("app_helper_accordion_questions2")}
                </AccordionHeader>
                <AccordionBody>
                    {t("app_helper_accordion_answer2")}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    {t("app_helper_accordion_questions3")}
                </AccordionHeader>
                <AccordionBody>
                    {t("app_helper_accordion_answer3")}
                </AccordionBody>
            </Accordion>
        </Fragment>
    )
}

export default SimpleAccordion;