import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import React, { ReactElement } from 'react';
import MainMenu from '../components/menu';
import { Redirect, Route } from 'react-router-dom';
import { MemberSearch } from './member-search';
import { SearchResults } from './search-results';

export const HubPage: React.FC = (): ReactElement => {
  return (
    <IonSplitPane contentId="main">
      <MainMenu />
      <IonRouterOutlet id="main">
        <Redirect exact path="/member" to="/member/home" />
        <Route
          path="/member/home"
          render={(): ReactElement => <MemberSearch />}
          exact={true}
        />

        <Route
          path="/member/searchResults"
          render={(): ReactElement => <SearchResults />}
          exact
        />
      </IonRouterOutlet>
    </IonSplitPane>
  );
};
