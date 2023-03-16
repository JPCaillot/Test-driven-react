import React from 'react';
import { mount, shallow } from 'enzyme';
import {Loot} from './Loot';

describe('Loot', () => {
    const mockFetchBitcoin = jest.fn();
    const props = {balance: 10, bitcoin: {} }
    let loot = shallow(<Loot {...props} />);

    it('renders properly', () => {
        expect(loot.debug()).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            props.fecthBitcoin = mockFetchBitcoin;
            loot = mount(<Loot {...props} />)
        });

        it('dispatches the `fetchBitcoin()` method it receives from props', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        })
    });
});