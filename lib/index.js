'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** 
 * filter out parent data
 */
function FilterData() {
    var whitelist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return {
        onKeyDown: function onKeyDown(event, change) {
            if (event.keyCode === 13) {
                var existingData = change.value.startBlock.get('data');
                var filteredData = whitelist.reduce(function (initial, current) {
                    if (existingData.has(current)) {
                        initial[current] = existingData.get(current);
                        return initial;
                    }
                    return initial;
                }, {});
                return change.splitBlock().setBlocks({
                    data: filteredData
                });
            }
            return;
        }
    };
};

exports.default = FilterData;