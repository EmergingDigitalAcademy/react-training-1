import { shallow } from 'enzyme';
import App from './App';

import Header from './components/Header';

describe('Our app', () => {
  it('should render a <Header /> somewhere, and only one of them', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
  });
});

function add(one, two) {
  return one + two;
}

describe('My Index file', () => {
  it('should add 2 numbers', () => {
    const result = add(1, 1);
    expect(result).toEqual(2);
  });

  it('should add 2 numbers again', () => {
    const result = add(2, 2);
    expect(result).toEqual(4);
  });
});
