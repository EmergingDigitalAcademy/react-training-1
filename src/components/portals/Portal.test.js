import { shallow } from 'enzyme';
import Portal from "./Portal";
import Portaler from './Portaler';

describe('Portal rendering', () => {
  it('should render a <Portaler /> when we click the first button on the component', () => {
    const wrapper = shallow(<Portal />);
    expect(wrapper.find(Portaler).length).toEqual(0);

    wrapper.find('button').at(0).simulate('click');

    // wrapper.find('button').first().simulate('click');
    expect(wrapper.find(Portaler).length).toEqual(1);
  });
});
