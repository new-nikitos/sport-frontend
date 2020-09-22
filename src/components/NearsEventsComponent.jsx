import React, { Component } from 'react';
import '../css/main-page.css';
import ApiService from '../scripts/ApiService';
import axios from 'axios';
import Cookie from '../scripts/Cookie.js'

class NearsEventsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        console.log("get");
        // axios.defaults.headers.common.Authorization = Cookie.getCookie("token");
        ApiService.getEvents()
            .then(res => {
                if (res)
                    console.log(res);
            })
    }

    render() {
        return (
                <div className="upcoming-events">
                    <h2 className="header-text">Ближайшие мероприятия</h2>
                    <div className="events-sort">
                        <div className="event1">
                            <div className="event-description">
                                Турнир по пляжному<br />волейболу среди<br/>школьных команд РТ
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
        )
    }
}

export default NearsEventsComponent;