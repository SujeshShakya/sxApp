import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import './member-search.scss';
import { useHistory } from 'react-router-dom';

export const MemberSearch: React.FC = (): ReactElement => {
  const history = useHistory();
  const { handleSubmit } = useForm({
    defaultValues: {},
  });
  const onSubmit = (): void => {
    //call API
    history.push('/member/searchresults');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Member Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem lines="none">
            <IonLabel>Service Date</IonLabel>
            <IonDatetime
              onIonChange={(e) => {
                //do something
              }}
              displayFormat={'DD MM YYYY'}
              value={'01 01 2021'}
              placeholder={'Enter Date'}
              readonly={false}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Search Using</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonLabel>Policy Number</IonLabel>
            <IonInput
              onIonInput={(e) => {
                //do something
              }}
              value={'234234234'}
              onIonChange={() => {
                //do something
              }}
              placeholder={'Enter Policy Number'}
            />
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Member Card Number</IonLabel>
            <IonInput
              onIonInput={(e) => {
                //do something
              }}
              value={'234234234'}
              onIonChange={() => {
                //do something
              }}
              placeholder={'Enter Member Card Number'}
            />
          </IonItem>
          <IonItem>
            <IonButton type="submit">Search</IonButton>
            <IonButton>Reset</IonButton>
          </IonItem>
        </form>
      </IonContent>
    </IonPage>
  );
};
