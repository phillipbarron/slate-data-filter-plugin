/** 
 * filter out parent data
*/
function FilterData() {
    return {
        onKeyDown(event, change) {
            if (event.keyCode === 13) {
                return change.splitBlock().setBlocks({ data: {} });
              }
              return;
        }
    }
};

export default FilterData;
