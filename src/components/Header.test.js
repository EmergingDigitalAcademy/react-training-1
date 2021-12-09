import { shallow } from "enzyme";
import Header from "./Header";

it('should render three <li /> elements', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('li').length).toBeGreaterThan(0);
})
