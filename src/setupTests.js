import { configure, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import  moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.mockStore = mockStore;
global.moxios = moxios;
global.shallow = shallow;

configure({ adapter: new Adapter() });
