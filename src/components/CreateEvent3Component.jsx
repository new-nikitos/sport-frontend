import React, { Component } from 'react';
import FormControlComponent from "./service/FormControlComponent";
import InputComponent from "./service/InputComponent";
import TextAreaComponent from "./service/TextAreaComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import ApiService from '../scripts/ApiService';
import Cookie from '../scripts/Cookie.js'
import axios from 'axios';
import checkboxes from '../img/step-third.png';
import '../css/create-event.css';

class CreateEvent3Component extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }

        this.form = [{id: 0, text: "Открытые"}, {id: 1, text: "Закрытые"}];
        this.type = [{id: 0, text: "Личные"}, {id: 1, text: "Групповые"}];
        this.place = [{id: 0, text: "Городские"}, {id: 1, text: "Районные"}];
    }

    send(data) {
        console.log(data);
        axios.defaults.headers.common.Authorization = Cookie.getCookie("token");
        data["id"] = localStorage.getItem("id");
        ApiService.createEvent3(data)
            .then(res => {
                console.log(res);
                if (res)
                    window.location.href=`/`;
            })
    }

    render() {
        return(        
            <div className="create-event">
                <div className="create-event__background">
                    <img className="checkboxes" src={checkboxes} />
                </div>
                <div className="create-event__form">
                    <div className="step-text" >Шаг 3 из 3</div>
                    <h2 className="header-text">Дополнение</h2>
                    <div className="label-text">Необязательный поля, поэтому их можно пропустить, но благодаря им, участник более подробно поймет, что от него требуют.</div>
                    <div className="label-text">Возрастная категория</div>
                    <FormControlComponent onSubmit={data => this.send(data)} render={
                        handleChange => (
                            <React.Fragment>
                                <InputComponent text="От" name="ageFrom" handleChange={handleChange} type="number" maxLength="3" required/>
                                <InputComponent text="До" name="ageTo" handleChange={handleChange} type="number" maxLength="3" required/>

                                <SelectInputComponent title="Форма проведения" id="form" handleChange={handleChange} data={this.form}/>
                                <SelectInputComponent title="По характеру зачета" id="type" handleChange={handleChange} data={this.type}/>
                                <SelectInputComponent title="По месту проведения" id="place" handleChange={handleChange} data={this.place}/>

                                <div className="footer-buttons">
                                        <div>
                                            <span style={{ color: '#347CC4' }}>🠐</span>
                                            <a href="/createEvent/step2" className="link">Назад</a>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary">Cледующий шаг</button>
                                        </div>
                                </div>
                            </React.Fragment>
                        )
                    }/>
                </div>
            </div>
        )
    }
}

export default CreateEvent3Component;