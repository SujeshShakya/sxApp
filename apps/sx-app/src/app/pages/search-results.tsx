import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMemberSearch } from '../../actions';
import { getMembers } from '../../selectors';
import { getMemberList } from '../../utils/util';

export const SearchResults: React.FC = (): ReactElement => {
  const members = useSelector(getMembers);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getMemberList('').then((response) => {
  //     // alert(JSON.stringify(response));
  //     dispatch(setMemberSearch(JSON.parse(response.data)));
  //   });
  // });

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
                  <IonCard>
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
                  </IonCard>
                </div>
              ))}
            </IonGrid>
          ) : (
            <p className="noMembers">No members found</p>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
