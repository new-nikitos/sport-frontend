import React, { Component } from 'react';
import '../css/main-page.css';
import livePicture from '../img/live.png';

import sport1 from '../img/sport-icon/1.png';
import sport2 from '../img/sport-icon/2.png';
import sport3 from '../img/sport-icon/3.png';

import logo1 from '../img/partners-logo/1.png'
import logo2 from '../img/partners-logo/2.png'
import logo3 from '../img/partners-logo/3.png'
import logo4 from '../img/partners-logo/4.png'
import logo5 from '../img/partners-logo/5.png'
import logo6 from '../img/partners-logo/6.png'
import logo7 from '../img/partners-logo/7.png'
import logo8 from '../img/partners-logo/8.png'
import logo9 from '../img/partners-logo/9.png'
import logo10 from '../img/partners-logo/10.png'

import icon1 from '../img/video-player/1.png'
import icon2 from '../img/video-player/2.png'
import icon3 from '../img/video-player/3.png'
import icon4 from '../img/video-player/4.png'

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="general-page">
                {/* <div className="tabs">
                    <div className="tabs__date">
                        <select className="btn-settings" style={{ border: 'none'}}>
                            <option selected>Дата</option>
                            <option value="1">23.09.20</option>
                            <option value="2">24.09.20</option>
                            <option value="3">25.09.20</option>
                        </select>
                    </div>
                    <div className="tabs__sports">
                        <select className="btn-settings" style={{ border: 'none'}}>
                            <option selected>Вид спорта</option>
                            <option value="1"></option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Three</option>
                            <option value="5">Three</option>
                            <option value="6">Three</option>
                            <option value="7">Three</option>
                            <option value="8">Three</option>
                            <option value="9">Three</option>
                            <option value="10">Three</option>
                        </select>
                    </div>
                    <div className="tabs__today">
                        <button className="btn btn-settings ">Сегодня</button>
                    </div>
                    <div className="tabs__tomorrow">
                        <button className="btn btn-settings">Завтра</button>
                    </div>
                    <div className="tabs__weekend">
                        <button className="btn btn-settings">В выходные</button>
                    </div>
                    <div className="tabs__child">
                        <button className="btn btn-settings">Детям</button>
                    </div>
                </div> */}

                <div className="live">
                    <img src={livePicture} width="1418" height="339" />
                </div>
                <div className="live-icon">
                    <div className="icon-video">
                        <div>
                            <img src={icon1} />
                            <span className="live-text">В эфире</span>
                        </div>
                        <div className="icon-video__full">
                            <img src={icon3} />
                        </div>
                    </div>
                </div>

                <div className="upcoming-events">
                    <h2 className="header-text">Ближайшие мероприятия</h2>
                    <div className="events-sort">
                        <div className="event1">
                            <div className="event-description">
                                Турнир по пляжному<br />волейболу среди<br />школьных команд РТ
                            </div>
                            <div className="event-description__date">20 сентябтря 2020</div>
                            <div className="btn-about"><button className="btn btn-primary">Подробнее</button></div>
                        </div>
                        <div className="event2">
                            <div className="event-description">
                                Соревнования по<br />настольному теннису,<br />посвященные Дню...
                            </div>
                            <div className="event-description__date">21 сентябтря 2020</div>
                            <div className="btn-about"><button className="btn btn-primary">Подробнее</button></div>
                        </div>
                        <div className="event3">
                            <div className="event-description">
                                Соревнования<br />по атлетике
                            </div>
                            <div className="event-description__date">22 сентябтря 2020</div>
                            <div className="btn-about"><button className="btn btn-primary">Подробнее</button></div>
                        </div>
                        <div className="event4">
                            <div className="event-description">
                                Соревнование по<br />фигурному катанию<br />у детей
                            </div>
                            <div className="event-description__date">23 сентябтря 2020</div>
                            <div className="btn-about"><button className="btn btn-primary">Подробнее</button></div>
                        </div>
                        <div className="event5">
                            <div className="event-description">
                                Соревнования<br />по мини-футболу<br />среди учащихся
                            </div>
                            <div className="event-description__date">24 сентябтря 2020</div>
                            <div className="btn-about"><button className="btn btn-primary">Подробнее</button></div>
                        </div>
                        <div className="event6">
                            <div className="event-description">
                                Соревнования<br />по шахматам
                            </div>
                            <div className="event-description__date">25 сентябтря 2020</div>
                            <div className="btn-about"><button className="btn btn-primary">Подробнее</button></div>
                        </div>
                    </div>
                </div>

                <div className="sports" style={{ marginTop: '50px' }}>
                    <h2 className="header-text">Спорт в твоем городе</h2>
                    <div className="sport-corousel">
                        <div className="sports__block">
                            <img src={sport1} />
                            <div className="map-preview__button"><button className="btn btn-primary map-preview">></button></div>
                        </div>
                        <div className="sports__block">
                            <img src={sport2} />
                            <div className="map-button"><button className="btn btn-primary map">Посмотреть на карте</button></div>
                        </div>
                        <div className="sports__block">
                            <img src={sport3} />
                            <div className="map-preview__button"><button className="btn btn-primary map-preview">></button></div>
                        </div>
                    </div>
                </div>

                <div className="sport-organizations">
                    <h2 className="header-text">Cпортивные организации</h2>
                    <div className="organization-logo">
                        <div className="organization-logo__block">
                            <img src={logo1} />
                            <div className="organization-logo__name">Федерация<br />плавания</div>
                        </div>
                        <div className="organization-logo__block">
                            <img src={logo2} />
                            <div className="organization-logo__name">Спортивная Федерация<br />спорта глухих</div>
                        </div>
                        <div className="organization-logo__block">
                            <img src={logo3} />
                            <div className="organization-logo__name">Федерация<br />компьютерного<br />спорта</div>
                        </div>
                        <div className="organization-logo__block">
                            <img src={logo4} />
                            <div className="organization-logo__name">Федерация КУДО<br />России</div>
                        </div>
                        <div className="organization-logo__block">
                            <img src={logo5} />
                            <div className="organization-logo__name">Федерация<br />горнолыжного спорта<br />и сноуборда</div>
                        </div>
                        <div className="organization-logo__block">
                            <img src={logo6} />
                            <div className="organization-logo__name">Федерация бокса</div>
                        </div>
                        <div className="organization-logo__block">
                            <img src={logo7} />
                            <div className="organization-logo__name">Федерация<br/>дартс России</div>
                        </div>
                        <div className="organization-logo__block">
                            <img src={logo8} />
                            <div className="organization-logo__name">Всероссийская федерация<br />спорта лиц с интеллектуальными<br />нарушениями</div>
                        </div>
                        <div className="organization-logo__block">
                            <img src={logo9} />
                            <div className="organization-logo__name">Баскетбольный клуб<br />на колясках<br />"Крылья Барса"</div>
                        </div>
                        <div className="organization-logo__block">
                            <img src={logo10} />
                            <div className="organization-logo__name">АНО "Корпорация<br/>активной молодежи"</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MainComponent;