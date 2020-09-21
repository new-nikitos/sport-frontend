import React, { Component } from 'react';
import TranslationComponent from "../components/TranslationComponent";
import CategoriesComponent from "../components/CategoriesComponent";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }

    render() {
        return(        
            <div className="main-page">
                <CategoriesComponent/>
                <TranslationComponent/>
                {/* <p className="main-page__text">Главная страница</p> */}
            </div>
        )
    }
}

export default MainComponent;