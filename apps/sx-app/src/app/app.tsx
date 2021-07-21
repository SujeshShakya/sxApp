import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import styles from './app.module.scss';
import { Redirect, Route } from 'react-router-dom';
import { HubPage } from './pages/hub';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <IonApp>
        <IonReactRouter>
          <Redirect exact path="/" to="/member" />
          <Route path="/member" component={HubPage} />
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;
