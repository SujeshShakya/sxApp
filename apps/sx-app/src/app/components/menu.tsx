import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import '@ionic/react/css/core.css';
import { ReactElement } from 'react';

interface Pages {
  title: string;
  path: string;
}

const routes = {
  searchPage: [
    { title: 'Member Search', path: '/member/home' },
    { title: 'Search Results', path: '/member/searchResults' },
  ],
};

export const MainMenu: React.FC = () => {
  const renderlistItems = (list: Pages[]): ReactElement[] => {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem
            detail={false}
            routerLink={p.path}
            routerDirection="none"
            // className={
            //   location.pathname.startsWith(p.path) ? 'selected' : undefined
            // }
          >
            <IonIcon slot="start" />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  };
  return (
    <IonMenu>
      <IonHeader>
        <IonToolbar>
          <IonIcon slot="start" />
          <IonTitle color="primary">Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent forceOverscroll={false}>
        <IonList lines="none">{renderlistItems(routes.searchPage)}</IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MainMenu;
