import React, { Component } from 'react';
import ApiService from '../scripts/ApiService.js'
import InputComponent from "../components/service/InputComponent";
import CheckboxComponent from "../components/service/CheckboxComponent";
import FormControlComponent from "../components/service/FormControlComponent";
import NoticeComponent from "../components/NoticeComponent";
import ClosePopupComponent from "../components/service/ClosePopupComponent";

class RegistrationComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isRegistrationComplete: false,
            sportCategoriesObject: {},
        }
    }

    send(data) {
        let sportCategories = [];
        for(let i in this.state.sportCategoriesObject) {
            if (this.state.sportCategoriesObject[i] === true) {
                sportCategories.push({"id": i})
            }
        };
        console.log(sportCategories)
        console.log(data);
        ApiService.registration(data)
            .then(res => {
                if (res) {
                    console.log(res);
                    if (sportCategories.length > 0) {
                        let categoriesData = {};
                        categoriesData["accountId"] = res.data;
                        categoriesData["sportCategories"] = sportCategories;
                        console.log(categoriesData);
                        ApiService.preference(categoriesData)
                            .then(res => {
                                console.log(res)
                                if (res) {
                                    this.setState({isRegistrationComplete: true});
                                }
                            })
                    } else {
                        this.setState({isRegistrationComplete: true});
                    }
                    
                }
                
            })
    }
    
    handleChange = (id, isCheked) => {
        console.log("this");
        let sportCategories = this.state.sportCategoriesObject;
        sportCategories[id] = isCheked
        this.setState({sportCategoriesObject: sportCategories});
    }

    render() {
        return(       
            <React.Fragment>
                <ClosePopupComponent close={this.props.close} isOpen={true} visible/>
                {this.state.isRegistrationComplete === false &&
                <div className="registration">
                    <p>Регистрация</p>
                    <FormControlComponent onSubmit={data => this.send(data)} render={
                                handleChange => (
                                    <React.Fragment>
                                        <InputComponent text="Логин" name="username" handleChange={handleChange} type="text" maxLength="60" required/>
                                        <InputComponent text="Имя" name="firstName" handleChange={handleChange} type="text" maxLength="60" placeholder="Ваше имя" required/>
                                        <InputComponent text="Фамилия" name="middleName" handleChange={handleChange} type="text" maxLength="60" placeholder="Ваша фамилия" required/>
                                        <InputComponent text="Почта" name="email" handleChange={handleChange} type="email" maxLength="60" placeholder="Ваш e-mail" required/>
                                        <InputComponent text="Пароль" name="password" handleChange={handleChange} type="password" maxLength="60" required/>

                                        <p>Ваши предпочтения</p>
                                        <div>
                                            <CheckboxComponent text="Футбол" name="0" handleChange={this.handleChange} type="checkbox" maxLength="20"/>
                                            <CheckboxComponent text="Хоккей" name="1" handleChange={this.handleChange} type="checkbox" maxLength="20" />
                                            <CheckboxComponent text="Баскетбол" name="2" handleChange={this.handleChange} type="checkbox" maxLength="20" />
                                            <CheckboxComponent text="Волейбол" name="3" handleChange={this.handleChange} type="checkbox" maxLength="20" />
                                            <CheckboxComponent text="Теннис" name="4" handleChange={this.handleChange} type="checkbox" maxLength="20" />
                                            <CheckboxComponent text="Плавание" name="5" handleChange={this.handleChange} type="checkbox" maxLength="20" />
                                            <CheckboxComponent text="Гимнастика" name="6" handleChange={this.handleChange} type="checkbox" maxLength="20" />
                                            <CheckboxComponent text="Бокс" name="7" handleChange={this.handleChange} type="checkbox" maxLength="20" />
                                            <CheckboxComponent text="Дзюдо" name="8" handleChange={this.handleChange} type="checkbox" maxLength="20" />
                                            <CheckboxComponent text="Атлетика" name="9" handleChange={this.handleChange} type="checkbox" maxLength="20" />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-authorization">Зарегистрироваться</button>
                                    </React.Fragment>
                                )
                            }/>
                </div>
                }
                {this.state.isRegistrationComplete === true &&
                    <NoticeComponent type="registration"/>
                }
            </React.Fragment>
        )
    }
}

export default RegistrationComponent;