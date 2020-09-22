import React, { Component } from 'react';
import FormControlComponent from "./service/FormControlComponent";
import InputComponent from "./service/InputComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import ApiService from '../scripts/ApiService';
import Cookie from '../scripts/Cookie.js'
import axios from 'axios';
import '../css/create-event.css';
import checkboxes from '../img/step-first.png'

class CreateEvent1Component extends Component {
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
        ApiService.getAllCategories()
            .then(res => {
                if (res) {
                    let categories = [];
                    for (let i = 0; i < res.data.length; i++) {
                        categories[i] = {};
                        categories[i]["id"] = res.data[i].categoryId;
                        categories[i]["text"] = res.data[i].caption;
                    }
                    console.log(categories);
                    this.setState({ categories: categories });
                    // this.setState({isStartRender: true});
                    console.log(res.data);
                }
            })

        ApiService.getComplex()
            .then(res => {
                if (res) {
                    let complex = [];
                    for (let i = 0; i < res.data.length; i++) {
                        complex[i] = {};
                        complex[i]["id"] = res.data[i].id;
                        complex[i]["text"] = res.data[i].caption;
                    }
                    console.log(complex);
                    this.setState({ complex: complex });
                    this.setState({ isStartRender: true });
                    console.log(res.data);
                }
            })
    }

    send(data) {
        console.log(data);
        ApiService.createEvent1(data)
            .then(res => {
                if (res)
                    localStorage.setItem("id", res.data);
                    window.location.href = `/createEvent/step2`;
            })
    }

    render() {
        return (
            <div className="create-event">
                <div className="create-event__background">
                    <img className="checkboxes" src={checkboxes} />
                </div>
                <div className="create-event__form">
                    <div className="step-text" >Шаг 1 из 3</div>
                    <h2 className="header-text">Создать мероприятие</h2>
                    <div className="label-text">Записаться можно только на один вид спорта</div>
                    {this.state.isStartRender &&
                        <FormControlComponent onSubmit={data => this.send(data)} render={
                            handleChange => (
                                <React.Fragment>

                                    <SelectInputComponent title="Вид спорта" id="sportType" handleChange={handleChange} data={this.state.categories} />
                                    <InputComponent style={{ marginTop: '30px' }} classForLabel="label-text" text="Выбрать дату проведения" name="eventDate" handleChange={handleChange} type="date" maxLength="20" required />
                                    <InputComponent style={{ marginTop: '30px' }} classForLabel="label-text" text="Выбрать время проведения" name="eventTime" handleChange={handleChange} type="time" maxLength="20" required />
                                    <SelectInputComponent title="Площадка проведения" id="complex" handleChange={handleChange} data={this.state.complex} />

                                    <div className="footer-buttons">
                                        <div>
                                            <span style={{ color: '#347CC4' }}>🠐</span>
                                            <a href="/" className="link">Назад</a>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary">Cледующий шаг</button>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        } />
                    }
                </div>
            </div>
        )
    }
}

export default CreateEvent1Component;