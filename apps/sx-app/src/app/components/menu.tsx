import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
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
          <IonItem detail={false} routerLink={p.path} routerDirection="none">
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  };
  return (
    <IonMenu type="overlay" disabled={false} contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
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
