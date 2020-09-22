import React, { Component } from 'react';
import TranslationComponent from "../components/TranslationComponent";
import CategoriesComponent from "../components/CategoriesComponent";
import RailMainPage from "../components/RailMainPage";

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
                {/* <TranslationComponent/> */}
                <RailMainPage/>
            </div>
        )
    }
}

export default MainComponent;