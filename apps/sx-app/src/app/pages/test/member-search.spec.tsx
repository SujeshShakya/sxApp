import { Provider } from 'react-redux';

import { MemberSearch } from '../member-search';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';

describe('Member Search form', () => {
  const initialState = { members: [] };
  const mockStore = configureStore();
  let store;
  it('renders correctly', () => {
    const initialState = { members: [] };
    store = mockStore(initialState);

    const { getByText, getByRole } = render(
      <Provider store={store}>
        <MemberSearch />
      </Provider>
    );

    expect(getByText('Member Search')).not.toBeNull();

    expect(getByText('Policy Number')).not.toBeNull();

    expect(getByRole('form')).not.toBeNull();
    // expect(getAllByRole('input', { name: 'policyNumber' })).not.toBeNull();

    // expect(getByRole('input', { name: 'policyNumber' })).toBe('test');
  });
});
