import React, { Component } from 'react';
import FormControlComponent from "./service/FormControlComponent";
import InputComponent from "./service/InputComponent";
import TextAreaComponent from "./service/TextAreaComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import ApiService from '../scripts/ApiService';
import Cookie from '../scripts/Cookie.js'
import axios from 'axios';

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
        ApiService.createEvent3(data)
            .then(res => {
                if (res)
                    window.location.href=`/`;
            })
    }

    render() {
        return(        
            <div className="create-event">
                <div className="create-event__background"></div>
                <div className="create-event__form">
                    <p>Шаг 3 из 3</p>
                    <h2>Дополнение</h2>
                    <p>Необязательный поля, поэтому их можно пропустить, но благодаря им, участник более подробно поймет, что от него требуют.</p>
                    <p>Возрастная категория</p>
                    <FormControlComponent onSubmit={data => this.send(data)} render={
                        handleChange => (
                            <React.Fragment>
                                <InputComponent text="От" name="ageFrom" handleChange={handleChange} type="number" maxLength="3" required/>
                                <InputComponent text="До" name="ageTo" handleChange={handleChange} type="number" maxLength="3" required/>

                                <SelectInputComponent title="Форма проведения" id="form" handleChange={handleChange} data={this.form}/>
                                <SelectInputComponent title="По характеру зачета" id="type" handleChange={handleChange} data={this.type}/>
                                <SelectInputComponent title="По месту проведения" id="place" handleChange={handleChange} data={this.place}/>

                                <div>
                                    <a href="/createEvent/step2">Назад</a>
                                    <button type="submit" className="button">Следующий шаг</button>
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