'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var event = {
    keyCode: 13
};
var setBlocksMock = jest.fn();
var change = {
    value: {
        selection: {},
        document: {}
    },
    splitBlock: function splitBlock() {
        return { setBlocks: setBlocksMock };
    }
};

beforeEach(function () {
    jest.resetAllMocks();
});

test('removes data where Enter key is pressed', function () {
    (0, _index2.default)().onKeyDown(event, change);
    expect(setBlocksMock.mock.calls.length).toBe(1);
});

test('nothing happens for non-enter event', function () {
    var response = (0, _index2.default)().onKeyDown({
        keyCode: 1
    }, change);
    expect(setBlocksMock.mock.calls.length).toBe(0);
    expect(response).toBe(undefined);
});