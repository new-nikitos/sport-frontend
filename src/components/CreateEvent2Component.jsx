import React, { Component } from 'react';
import FormControlComponent from "./service/FormControlComponent";
import InputComponent from "./service/InputComponent";
import TextAreaComponent from "./service/TextAreaComponent";
import ApiService from '../scripts/ApiService';
import Cookie from '../scripts/Cookie.js'
import axios from 'axios';

class CreateEvent2Component extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    send(data) {
        console.log(data);
        data["id"] = localStorage.getItem("id");
        axios.defaults.headers.common.Authorization = Cookie.getCookie("token");
        ApiService.createEvent2(data)
            .then(res => {
                if (res)
                    window.location.href=`/createEvent/step3`;
            })
    }

    render() {
        return(        
            <div className="create-event">
                <div className="create-event__background"></div>
                <div className="create-event__form">
                    <p>Шаг 2 из 3</p>
                    <h2>О мероприятии</h2>
                    <p>Выбрать критерии в соответсвии с вашим видом спорта.</p>
                    <FormControlComponent onSubmit={data => this.send(data)} render={
                        handleChange => (
                            <React.Fragment>
                                <InputComponent text="Наименование" name="name" handleChange={handleChange} type="text" maxLength="50" required/>
                                <TextAreaComponent text="Описание" name="description" handleChange={handleChange} required/>

                                <div>
                                    <a href="/createEvent/step1">Назад</a>
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

export default CreateEvent2Component;