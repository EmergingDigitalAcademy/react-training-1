import { shallow } from 'enzyme';
import ErrorBoundaryChild from "./ErrorBoundaryChild";

it('should throw an error', () => {
  const wrapper = shallow(<ErrorBoundaryChild />);

  function clickingTheButton() {
    wrapper.find('button').first().simulate('click')
  }
  expect(clickingTheButton).toThrowError();
});
