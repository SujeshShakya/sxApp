import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './app.module.scss';
import { Redirect, Route } from 'react-router-dom';
import { HubPage } from './pages/hub';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { Provider } from 'react-redux';
import store from '../store/index';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <IonApp>
        <Provider store={store}>
          <IonReactRouter>
            <Redirect exact path="/" to="/member" />
            <Route path="/member" component={HubPage} />
          </IonReactRouter>
        </Provider>
      </IonApp>
    );
  }
}

export default App;
