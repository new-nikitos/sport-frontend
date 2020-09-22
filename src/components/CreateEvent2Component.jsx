import React, { Component } from 'react';
import FormControlComponent from "./service/FormControlComponent";
import InputComponent from "./service/InputComponent";
import TextAreaComponent from "./service/TextAreaComponent";
import ApiService from '../scripts/ApiService';
import Cookie from '../scripts/Cookie.js'
import axios from 'axios';
import '../css/create-event.css';
import checkboxes from '../img/step-second.png'

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
            <div className="create-event__background">
            <div className="create-event__background">
                <img className="checkboxes" src={checkboxes} />
            </div>
            </div>
            <div className="create-event__form">
            <div className="step-text" >Шаг 2 из 3</div>
                <h2 className="header-text">О мероприятии</h2>
                <div className="label-text">Выбрать критерии в соответсвии с вашим видом спорта.</div>
                <FormControlComponent onSubmit={data => this.send(data)} render={
                    handleChange => (
                        <React.Fragment>
                            <InputComponent style={{ marginTop: '30px' }} classForLabel="label-text" text="Наименование" name="name" handleChange={handleChange} type="text" maxLength="50" required/>
                            <TextAreaComponent classForLabel="label-text" text="Описание" name="description" handleChange={handleChange} required/>

                            <div className="footer-buttons">
                                    <div>
                                        <span style={{ color: '#347CC4' }}>🠐</span>
                                        <a href="/createEvent/step1" className="link">Назад</a>
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

export default CreateEvent2Component;