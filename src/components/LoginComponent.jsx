import React, { Component } from 'react';
import ApiService from '../scripts/ApiService.js'
import Cookie from '../scripts/Cookie.js'
import InputComponent from "../components/service/InputComponent";
import FormControlComponent from "../components/service/FormControlComponent";
import ClosePopupComponent from "../components/service/ClosePopupComponent";
import axios from 'axios';
import background from '../img/background-auth.png';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isIncorrectData: false,
        }
    }

    send(data) {
        this.setState({isIncorrectData: false})
        console.log(data);
        ApiService.auth(data)
            .then(res => {
                if (res) {
                    Cookie.setCookie("token", res.data.token, "secure");
                    axios.defaults.headers.common.Authorization = res.data.token;
                    Cookie.setCookie("userId", res.data.user.id, "secure");
                    Cookie.setCookie("username", res.data.user.username, "secure");
                    Cookie.setCookie("authorities", res.data.user.authorities, "secure");
                    console.log(res);
                    this.setState({isRegistrationComplete: true});
                    window.location.reload();
                } else {
                    this.setState({isIncorrectData: true})
                }
            })
    }

    render() {
        return(       
            <React.Fragment>
                <ClosePopupComponent isOpen={true} close={this.props.close} visible/>
                <div className="login">
                    <div className="authorization">
                        <h2 className="authorization__header">Авторизация</h2> 
                        <FormControlComponent onSubmit={data => this.send(data)} render={
                                    handleChange => (
                                        <React.Fragment>
                                            <InputComponent text="Почта" name="email" handleChange={handleChange} type="email" maxLength="60" placeholder="Ваш e-mail" style={{ marginTop: '30px' }} required/>
                                            <InputComponent text="Пароль" name="password" handleChange={handleChange} type="password" maxLength="60" style={{ position: 'relative' }} required/>
                                            {this.state.isIncorrectData &&
                                                <p>Неправильный логин или пароль</p>
                                            }
                                            <button type="submit" className="btn btn-primary btn-authorization">Войти</button>
                                        </React.Fragment>
                                    )
                                }/>
                        <div className="login__last" style={{ textAlign: "center" }}>
                            <span style={{ fontSize: '12px', color: '#9F9F9F' }}>У вас нет учетной записи?</span>
                            <a href="#" className="link">Зарегистрироваться</a>
                        </div>
                    </div>
                    {/* <div className="image">
                        <img src={background} height="770" width="700" />
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
}

export default LoginComponent;