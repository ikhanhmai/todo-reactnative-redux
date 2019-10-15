import React from 'react';
import {shallow} from 'enzyme';
import AddTodo from './AddTodo';

describe('AddTodo', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<AddTodo/>)
            expect(component).toMatchSnapshot()
        });
    });
});