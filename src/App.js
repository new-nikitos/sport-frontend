import React from 'react';
import './style.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent.jsx'
import MainPageComponent from './components/MainPageComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import NoticeComponent from './components/NoticeComponent.jsx'
import { store } from './store';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isErrorOpen: false,
    }

    store.subscribe(() => this.setState({isErrorOpen: store.getState()}));
  }

  render() {
    return (
      <Router>
        {this.state.isErrorOpen &&
          <NoticeComponent type="error"/>
        }
        <div className="wrapper">
          <HeaderComponent/>
          <div className="main">
            <div className="main__content">
              <Switch>
                <Route path="/" exact component={MainPageComponent}/>
              </Switch>
            </div>
          </div>
        </div>
        
        <FooterComponent/>
      </Router>
    );
  }
  
}

export default App;
