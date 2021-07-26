import React from 'react';
import { shallow, configure } from 'enzyme';
import { SearchResults } from '../search-results';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function shallowSetup() {
  // Sample props to pass to our shallow render

  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<SearchResults />);

  return {
    enzymeWrapper,
  };
}

describe('Shallow rendered Member Search', () => {
  it('should render Member Search', () => {
    const { enzymeWrapper } = shallowSetup();
    expect(enzymeWrapper.find('.noMembers').hasClass('noMembers')).toBe(true);
    expect(enzymeWrapper.find('.noMembers').text()).toBe('No members found');
  });
});
