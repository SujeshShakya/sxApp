import { IonInput, IonItem } from '@ionic/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import allReducers from '../../../reducers';

import { SearchResults } from '../search-results';
import { MemberSearch } from '../member-search';
import { createStore } from 'redux';

configure({ adapter: new Adapter() });

describe('Member Search form', () => {
  it('renders correctly', () => {
    // const form = {
    //   date: '',
    //   policyNumber: '',
    // };

    const memberSearchForm = shallow(<MemberSearch />);
    expect(memberSearchForm.length).toEqual(1);
    const form = memberSearchForm.find('form');
    expect(form.length).toBe(1);

    const inputContainers = form.find(IonInput);
    expect(inputContainers.length).toEqual(2);
    const dateInput = inputContainers.at(0);
    expect(dateInput.props().label).toEqual('Service Date');

    const policyInput = inputContainers.at(1);
    expect(policyInput.props().label).toEqual('Policy Number');

    expect(memberSearchForm.getElement()).toEqual(
      <form onSubmit={expect.any(Function)}>
        <IonItem>
          <IonInput />
        </IonItem>
        <IonItem>
          <IonInput />
        </IonItem>
      </form>
    );
  });
});

describe('Search result', () => {
  const store = createStore(allReducers, { members: [] });

  it('renders correctly when no member found', () => {
    const memberSearchResult = shallow(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );
    expect(memberSearchResult.length).toEqual(1);
    expect(memberSearchResult.find('.noMembers')).toEqual(
      <p>No members found</p>
    );
  });

  it('renders correctly when member found', () => {
    const member = {
      serviceDate: 'sdfdsf',
      policyNumber: 'sdfdsf',
      memberCardNumber: 'dsfdsf',
    };

    const memberSearchResult = shallow(<SearchResults />);
    expect(memberSearchResult.length).toEqual(1);
    expect(memberSearchResult.getElement()).toEqual(
      <IonItem>
        <p>Service Date: {member.serviceDate}</p>
        <p>Policy Number: {member.policyNumber}</p>
        <p>Member Card Number: {member.memberCardNumber}</p>
      </IonItem>
    );
  });
});
