import Immutable from 'immutable';
import FilterData from './filter-data';

const event = {
    keyCode: 13
};
const setBlocksMock = jest.fn();
const change = {
    value: {
        selection: {},
        document: {
            getBlocksAtRange: () => Immutable.fromJS([
                {
                    type: 'test-block'
                }
            ])
        }
    },
    insertText: () => {},
    splitBlock() {
        return {setBlocks: setBlocksMock}
    }
};

beforeEach(() => {
    jest.resetAllMocks()
});

test('removes data where Enter key is pressed', () => {
    FilterData().onKeyDown(event, change);
    expect(setBlocksMock.mock.calls.length).toBe(1);
});

test('nothing happens for non-enter event', () => {
    const response = FilterData().onKeyDown({
        keyCode: 1
    }, change);
    expect(setBlocksMock.mock.calls.length).toBe(0);
    expect(response).toBe(undefined);
});