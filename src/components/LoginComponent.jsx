import React, { Component } from 'react';
import ApiService from '../scripts/ApiService.js'
import Cookie from '../scripts/Cookie.js'
import InputComponent from "../components/service/InputComponent";
import FormControlComponent from "../components/service/FormControlComponent";
import ClosePopupComponent from "../components/service/ClosePopupComponent";
import axios from 'axios';

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
                Cookie.setCookie("token", res.data.token, "secure");
                axios.defaults.headers.common.Authorization = res.data.token;
                Cookie.setCookie("userId", res.data.user.id, "secure");
                Cookie.setCookie("username", res.data.user.username, "secure");
                Cookie.setCookie("authorities", res.data.user.authorities, "secure");
                console.log(res);
                this.setState({isRegistrationComplete: true});
                window.location.reload();
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 401) {
                        this.setState({isIncorrectData: true})
                    }
                }
            })

    }

    render() {
        return(       
            <div className="login">
                <p>Войти</p>
                <ClosePopupComponent isOpen={true} close={this.props.close} visible/>
                <FormControlComponent onSubmit={data => this.send(data)} render={
                            handleChange => (
                                <React.Fragment>
                                    <InputComponent text="Почта" name="email" handleChange={handleChange} type="email" maxLength="20" placeholder="Ваш e-mail" required/>
                                    <InputComponent text="Пароль" name="password" handleChange={handleChange} type="password" maxLength="20" required/>
                                    {this.state.isIncorrectData &&
                                        <p>Неправильный логин или пароль</p>
                                    }
                                    <button type="submit" className="button">Войти</button>
                                </React.Fragment>
                            )
                        }/>
            </div>
        )
    }
}

export default LoginComponent;