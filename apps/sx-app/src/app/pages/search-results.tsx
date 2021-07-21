import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { ReactElement } from 'react';

export const SearchResults: React.FC = (): ReactElement => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/member/home"></IonBackButton>
          </IonButtons>
          <IonTitle>Search Results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>test</IonContent>
    </IonPage>
  );
};
