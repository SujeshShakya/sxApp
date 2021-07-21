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
import { useForm, Controller } from 'react-hook-form';
import './member-search.scss';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  serviceDate: yup.date().required('This is a required field'),
  policyNumber: yup.number().required('This is a required field'),
});

export const MemberSearch: React.FC = (): ReactElement => {
  const history = useHistory();
  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const onSubmit = (data): void => {
    //call API
    // alert(JSON.stringify(data));
    history.push('/member/searchresults');
  };

  console.log(watch());
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
            {/* <IonDatetime
              {...register('serviceDate')}
              onIonChange={(e) => {
                //do something
              }}
              displayFormat={'DD MM YYYY'}
              value={''}
              placeholder={'Enter Date'}
              readonly={false}
            /> */}
            <input type="date" {...register('serviceDate')}></input>
            {errors.serviceDate && <p>{errors.serviceDate?.message}</p>}
          </IonItem>
          <IonItem>
            <IonLabel>Search Using</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonLabel>Policy Number</IonLabel>
            <input {...register('policyNumber')}></input>
            {errors.policyNumber && <p>{errors.policyNumber?.message}</p>}
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Member Card Number</IonLabel>
            <IonInput
              onIonInput={(e) => {
                //do something
              }}
              value={''}
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
