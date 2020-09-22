import React from 'react';
import './style.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent.jsx'
import MainPageComponent from './components/MainPageComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import NoticeComponent from './components/NoticeComponent.jsx'
import { store } from './store';
import CreateEvent1Component from './components/CreateEvent1Component.jsx'
import CreateEvent2Component from './components/CreateEvent2Component.jsx'
import CreateEvent3Component from './components/CreateEvent3Component.jsx'
import CreateMailSentComponent from './components/CreateMailSentComponent.jsx'

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
                <Route path="/createEvent/step1" exact component={CreateEvent1Component}/>
                <Route path="/createEvent/step2" exact component={CreateEvent2Component}/>
                <Route path="/createEvent/step3" exact component={CreateEvent3Component}/>
                <Route path="/createMailSent" exact component={CreateMailSentComponent}/>
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
