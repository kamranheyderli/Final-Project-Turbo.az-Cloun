import React from 'react';
// react_router-dom
import { Link } from 'react-router-dom';

// react_icons
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
// import { Icon } from '@mui/material';
// helpers
import { CategoryData } from '../../helpers/categoryData';

const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className="container">
                <div className="top_footer">
                    <h3>Reklam Yerlesdirin</h3>
                    <ul>
                        <li><Link to="https://www.facebook.com/www.turbo.az" target="_blank"><i><ImFacebook /></i></Link></li>
                        <li><Link to="https://www.instagram.com/turbo.az/" target="_blank"><i><BsInstagram /></i></Link></li>
                        <li><Link to="https://mail.ru/"><i><AiOutlineMail /></i> <span>turbo@turbo.az</span></Link></li>
                        <li><Link to=""><i><BsFillTelephoneFill /></i><span>(012) 505-77-55</span></Link></li>
                    </ul>
                </div>
                <div className="mid_footer">
                    <ul>
                        {
                            CategoryData.map((item) => {
                                return (
                                    <li key={item.id}><Link>{item.category} <span>(7)</span></Link></li>
                                )
                            })
                        }

                    </ul>

                    <ul>
                        {
                            CategoryData.map((item) => {
                                return (
                                    <li key={item.id}><Link>{item.category} <span>(7)</span></Link></li>
                                )
                            })
                        }

                    </ul>

                    <ul>
                        {
                            CategoryData.map((item) => {
                                return (
                                    <li key={item.id}><Link>{item.category} <span>(7)</span></Link></li>
                                )
                            })
                        }

                    </ul>
                    <ul>
                        {
                            CategoryData.map((item) => {
                                return (
                                    <li key={item.id}><Link>{item.category} <span>(7)</span></Link></li>
                                )
                            })
                        }

                    </ul>
                    <ul>
                        {
                            CategoryData.map((item) => {
                                return (
                                    <li key={item.id}><Link>{item.category} <span>(7)</span></Link></li>
                                )
                            })
                        }

                    </ul>
                    <ul>
                        {
                            CategoryData.map((item) => {
                                return (
                                    <li key={item.id}><Link>{item.category} <span>(7)</span></Link></li>
                                )
                            })
                        }

                    </ul>
                </div>
                
                <div className="bottom_footer">
                    <div className="left_bottom_footer">
                        <p>Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.</p>
                    </div>

                    <div className="right_bottom_footer">
                        <span>2006-2023 Digital Classifieds MMC. VÖEN: 1405631661</span>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer