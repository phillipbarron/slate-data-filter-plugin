/** 
 * filter out parent data
 */
function FilterData(whitelist = []) {
    return {
        onKeyDown(event, change) {
            if (event.keyCode === 13) {
                const existingData = change.value.startBlock.get('data');
                const filteredData = whitelist.reduce(
                    (initial, current) => {
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
    }
};

export default FilterData;