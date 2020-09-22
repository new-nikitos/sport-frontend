import React, { Component } from 'react';
import FormControlComponent from "./service/FormControlComponent";
import InputComponent from "./service/InputComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import ApiService from '../scripts/ApiService';
import Cookie from '../scripts/Cookie.js'
import axios from 'axios';

class CreateMailSentComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            categories: [],
            complex: [],
            isStartRender: false,
        }
    }

    componentDidMount() {
        axios.defaults.headers.common.Authorization = Cookie.getCookie("token");
        ApiService.getTeamSport()
            .then(res => {
                if (res) {
                    console.log(res)
                }
            })
            
        ApiService.getSingleSport()
            .then(res => {
                if (res) {
                    console.log(res)
                }
            })
    }

    send(data) {
        for (let i in data) {
            if (i === "eventDate") {
                console.log(typeof(data[i]))
            }
            if (i === "eventTime") {
                console.log(typeof(data[i]))
            }
        }
        console.log(data);
        ApiService.createEvent1(data)
            .then(res => {
                if (res)
                    console.log(res.data);
                    localStorage.setItem("id", res.data);
                    // window.location.href=`/createEvent/step2`;
            })
    }

    render() {
        return(        
            <div className="create-event">
                <div className="create-event__background"></div>
                <div className="create-event__form">
                    <h2>Создать Рассылку</h2>
                    {this.state.isStartRender &&
                        <p></p>
                    }
                </div>
            </div>
        )
    }
}

export default CreateMailSentComponent;