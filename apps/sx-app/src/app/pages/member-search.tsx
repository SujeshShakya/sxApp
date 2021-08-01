import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
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
import { getMemberList } from '../../utils/util';
import { useDispatch } from 'react-redux';
import { setMemberSearch } from '../../actions';

const schema = yup.object().shape({
  serviceDate: yup.date().required('This is a required field'),
  policyNumber: yup.number().required('This is a required field'),
});

const formState = {
  serviceDate: new Date(),
  policyNumber: '',
};

export const MemberSearch: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data): void => {
    //call API
    getMemberList(data.policyNumber).then((response) => {
      dispatch(setMemberSearch(JSON.parse(response.data)));
    });

    history.push('/member/searchresults');
  };

  const handleReset = () => {
    reset();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Member Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleSubmit(onSubmit)} name="memberForm">
          <IonItem lines="none">
            <IonLabel>Service Date</IonLabel>
            <input type="date" {...register('serviceDate')}></input>
            {errors.serviceDate && <p>{errors.serviceDate?.message}</p>}
          </IonItem>
          <IonItem>
            <IonLabel>Search Using</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonLabel>Policy Number</IonLabel>
            <input
              {...register('policyNumber', {
                required: 'This is required',
                pattern: {
                  value: /^(0|[1-9][0-9]*)$/,
                  message: 'Please enter a number',
                },
              })}
            ></input>
            {errors.policyNumber && <p>{errors.policyNumber?.message}</p>}
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Member Card Number</IonLabel>
            <input {...register('memberCardNumber')}></input>
          </IonItem>

          <IonItem>
            <IonButton type="submit">Search</IonButton>
            <IonButton onClick={handleReset}>Reset</IonButton>
          </IonItem>
        </form>
      </IonContent>
    </IonPage>
  );
};
