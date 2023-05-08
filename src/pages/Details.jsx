
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WipCardData } from "../helpers/cardData";
// icon react
import { AiOutlineHeart } from "react-icons/ai";
import { BsFlag, BsTelephone } from "react-icons/bs"
// router_dom
import { Link } from 'react-router-dom';



export const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const data = WipCardData.filter((e) => e.id == id);
        setDetails(data[0]);

    }, []);


    const { image, description, price, title, place } = details;
    console.log(details)


    return (
        <div className='details__wrapper py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="details__header">
                            <div className="details__title ">
                                <h2>{description} {title}</h2>
                            </div>
                            <div className="details__action">
                                <ul>
                                    <li>
                                        <AiOutlineHeart /><span>Seçilmişlərdə saxla</span>
                                    </li>
                                    <li>
                                        <BsFlag /> <span>Şikayət et</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="details__bottom flex justify-between flex-wrap py-4  ">
                        <div className="col-lg-8">
                            <div className="details-left flex flex-col ">
                                <div className="details__img">
                                    <img className='w-full h-full border rounded-md' src={image} alt="" />
                                </div>
                                <div className="details__about p-4 ">
                                    <p >
                                        Avtomobil 1-ci sahibindən satılır <br />
                                        Toyota mərkəzindən alınıb <br />
                                        Bütün xidmətlər servisdə olunub <br />
                                        💯% Orjinal prabeg <br />
                                        💯% Bez kraska <br />
                                        Dəri salon
                                        Ön oturacağın düymə ilə idarə olunması
                                        3 monitor(arxa monitorlar android)❗️❗️❗️
                                        7yerlik
                                        Lük
                                        Simsiz şarj
                                        Xolodenik
                                        Avtomatik qatlanan yan güzgülər
                                        Arxa görüntü kamerası
                                        Avtomobil çox səliqəli istifadə olunub <br />
                                        🛑🛑LİZİNQ VƏ KREDİTLƏDƏ ALMAQ MÜMKÜNDÜR
                                        Çox xaiş edirik fikri ciddi şəxslər əlaqə saxlasın
                                        Qeyd:OBMEN YALNIZ AVTOMOBİL İLƏ OLUNUR
                                        Buraxılış ili 100% 2019 <br />
                                        N1🛑🛑
                                        AVTOSALON 040 CARS (ŞİRXAN)
                                        Ünvan Babək pr2270/77
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details-right  ">
                                <div className="details__about ">
                                    <div className="details_price p-5">
                                        <span>{price}$</span>
                                    </div>
                                    <div className="details__shop">
                                        <img src="https://turbo.azstatic.com/uploads/f352x352/2021%2F11%2F30%2F11%2F08%2F44%2F3fbb6b8c-eb41-4f86-88ec-59457f8d2150%2FLOGOGO.png" alt="" />
                                        <span>Avtosalon "040 Cars"</span>
                                    </div>
                                    <div className="contact p-3 mt-2">
                                        <button>
                                            <span>Bizimlə əlaqə</span>
                                            <span className='flex items-center gap-x-2'><BsTelephone /> 0516621599</span>
                                        </button>
                                    </div>
                                    <div className="details__comment p-3">
                                        <p>
                                            Peşəkar avtomobil mütəxəssisi Şirxan, sizin şəxsi bələdçiniz olacaq
                                        </p>
                                        <span>
                                            Məqsədimiz uzun illərdi müştərilərin bizə olan etimadını qoruyub saxlamaq və yüksək xidmət göstərmək.
                                        </span>
                                    </div>
                                    <div className="details_shop ">
                                        <span>{place}</span>
                                        <button>
                                            <Link>Salona Kec</Link>
                                        </button>
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

export default Details
