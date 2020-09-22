import React, { Component } from 'react';
import '../css/footer.css';
import logo from '../img/footer-logo.png';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="footer-container">
                <div className="footer-block1">
                    <div>
                        <img className="footer__logo" src={logo} />
                    </div>
                    <div className="footer__logo--name">
                        Спортивный портал<br />республики Татарстан
                </div>
                    <div className="footer__description">
                        «Умный» поиск, афиша<br />мероприятий, просмотр<br />фотографий, полная<br />и достоверная информация.
                </div>
                </div>
                <div className="footer-block2">
                    <div className="footer-block2__menu">Меню</div>
                    <a href="#" className="footer-block2__menu--item" style={{ marginTop: '28.32px', textDecoration: 'none' }}>О проекте</a>
                    <a href="#" className="footer-block2__menu--item" style={{ marginTop: '10.62px', textDecoration: 'none' }}>Новости</a>
                    <a href="#" className="footer-block2__menu--item" style={{ marginTop: '10.62px', textDecoration: 'none' }}>Вопросы</a>
                </div>
                <div className="footer-block3">
                    <div className="footer-block3__menu">Контакты</div>
                    <div className="input">
                        <input className="form-control input__name" placeholder="Ваше имя" />
                        <input className="form-control input__name" placeholder="Ваш номер" />
                    </div>
                    <div className="textarea">
                        <textarea className="form-control textarea__message" placeholder="Сообщение" rows="4"></textarea>
                    </div>
                    <div style={{ marginTop: '15px' }} ><button className="btn btn-submit">Отправить</button></div>
                </div>

            </div>
        )
    }
}

export default FooterComponent;