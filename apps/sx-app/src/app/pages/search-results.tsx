import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { getMembers } from '../../selectors';

export const SearchResults: React.FC = (): ReactElement => {
  const members = useSelector(getMembers);
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
      <IonContent>
        <IonList>
          {members && members.length > 0 ? (
            <IonGrid>
              {members.map((item, i) => (
                <div>
                  <IonRow>
                    <IonCol>First Name</IonCol>
                    <IonCol>{item.firstName}</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>Last Name</IonCol>
                    <IonCol>{item.lastName}</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>Date of birth</IonCol>
                    <IonCol>{item.dataOfBirth}</IonCol>
                  </IonRow>
                </div>
              ))}
            </IonGrid>
          ) : (
            // members.map((item) => <div> {item.firstName} </div>)
            <div>test</div>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
