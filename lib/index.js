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
            console.log('event', event);
            if (event.keyCode === 13) {
                console.log('this is happening')
                return change.splitBlock().setBlocks({ data: {} });
            }
            return undefined;
        }
    };
};

exports.default = FilterData;