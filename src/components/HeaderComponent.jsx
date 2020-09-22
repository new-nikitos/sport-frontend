import React, { Component } from 'react';
import RegistrationComponent from './RegistrationComponent';
import LoginComponent from './LoginComponent';
import Cookie from '../scripts/Cookie.js'
import logo from '../img/logo.png';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          registrationIsOpen: false,
          loginIsOpen: false,
          nameAuthorized: false,
        }
    }

    componentDidMount() {
      if (Cookie.getCookie("username")) {
        this.setState({nameAuthorized: Cookie.getCookie("username")});
      }
    }

    handleRegistrationButton = () => {
      const state = this.state.registrationIsOpen;
      this.setState({registrationIsOpen: !state});
    }

    handleLoginButton = () => {
      const state = this.state.loginIsOpen;
      this.setState({loginIsOpen: !state});
    }

    render() {
        return(       
          <div className="header">
            <a href="/" className="header__logo logo-container">
              <img className="logo-container__img" alt="logo" src={logo}/>
              <span className="logo-container__text">Спортивный портал<br/> республики Татарстан</span>
            </a>

            <div className="header__location">Казань</div>

            <ul className="header__list">
              <li className="header__item"><a href="#" className="header__link">О проекте</a></li>
              <li className="header__item"><a href="/createMailSent" className="header__link">Рассылка</a></li>
              <li className="header__item"><a href="/createEvent/step1" className="header__link">Мероприятия</a></li>
              {/* <li className="header__item"><a href="#" className="header__link">Контакты</a></li> */}
            </ul>

            <div className="header__buttons">
              {this.state.nameAuthorized === false &&
                <React.Fragment>
                  <button className="button--log header__button-log" onClick={this.handleLoginButton}>Войти</button>
                  <button className="button--registration" onClick={this.handleRegistrationButton}>Регистрация</button>
                </React.Fragment>
              }
              {this.state.nameAuthorized &&
                <p>{this.state.nameAuthorized}</p>
              }
            </div>


            {this.state.registrationIsOpen &&
              <RegistrationComponent close={this.handleRegistrationButton}/>
            }
            {this.state.loginIsOpen &&
              <LoginComponent close={this.handleLoginButton}/>
            }
          </div>
        )
    }
}

export default HeaderComponent;