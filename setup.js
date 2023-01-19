import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {JSDOM} from 'jsdom';

enzyme.configure({adapter: new Adapter()});

// JSDOM configuration
const dom = new JSDOM(
    '<!DOCTYPE html><html><body></body></html>',
    {url: 'http://localhost/'}
);

global.window = dom.window;
global.document = dom.window.document;