import React, { Component } from 'react';

class CategoriesComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }

    render() {
        return(        
            <ul className="categories">
                <li className="categories__item categories__item--eye"></li>
                <li className="categories__item categories__item--arrow">Дата</li>
                <li className="categories__item categories__item--arrow">Вид спорта</li>
                <li className="categories__item">Сегодня</li>
                <li className="categories__item">Завтра</li>
                <li className="categories__item">В выходные</li>
                <li className="categories__item">Детям</li>
            </ul>
        )
    }
}

export default CategoriesComponent;