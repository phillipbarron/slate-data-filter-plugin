"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** 
 * filter out parent data
*/
function FilterData() {
    return {
        onKeyDown: function onKeyDown(event, change) {
            if (event.keyCode === 13) {
                return change.splitBlock().setBlocks({ data: {} });
            }
            return;
        }
    };
};

exports.default = FilterData;