import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import Foo from './Foo';

describe('<Foo/>', () => {
    it('Should render with text', () => {
        const wrapper = mount(<Foo/>);
        expect(wrapper.text()).to.equal('123');
    });
});