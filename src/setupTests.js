import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Setup enzyme to use our React 17 adapter. Use a different adapter for different versions!
configure({ adapter: new Adapter() });
