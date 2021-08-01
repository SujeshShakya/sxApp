import { Provider } from 'react-redux';

import { SearchResults } from '../search-results';
import configureStore from 'redux-mock-store';
import { getByText, render } from '@testing-library/react';

describe('Search result', () => {
  const mockStore = configureStore();
  let store;

  it('render correctly when no results found', () => {
    const initialState = { members: [] };
    store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    expect(getByText('No members found')).not.toBeNull();
  });

  it('render correctly when  results found', () => {
    const initialState = {
      members: [
        {
          id: 1,
          firstName: 'Winne',
          lastName: 'Janc',
          memberCardNumber: '0473128446',
          policyNumber: '1405677686',
          dataOfBirth: '26/07/1995',
        },
      ],
    };
    store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    expect(getByText('Winne')).not.toBeNull();

    expect(getByText('First Name')).not.toBeNull();
    expect(getByText('0473128446')).not.toBeNull();
    expect(getByText('26/07/1995')).not.toBeNull();
  });
});
