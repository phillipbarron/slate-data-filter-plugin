# Filter data on enter handler

Removes any data props which would otherwise be inherited for the enter onKeyDown event. This applies to all block-types.

Accepts a whitelist array parameter to allow defined values to be inherited. 

## usage

### no whitelist

```js
import React, { Component } from 'react'
import { Editor } from 'slate-react'
import FilterData from 'slate-data-filter-plugin';

const plugins = [FilterData()];

export default class App extends Component {
    state = {
        value: initialValue,
    };
    onChange = ({ value }) => {
        this.setState({ value });
    };

    render() {
        return (
            <Editor plugins={plugins} onKeyDown={this.onKeyDown} value={this.state.value} onChange={this.onChange} />
        )
    };
}
```

### with whitelist

```js
import React, { Component } from 'react'
import { Editor } from 'slate-react'
import FilterData from 'slate-data-filter-plugin';

const plugins = [FilterData(['foo', 'bar'])];

export default class App extends Component {
    state = {
        value: initialValue,
    };
    onChange = ({ value }) => {
        this.setState({ value });
    };

    render() {
        return (
            <Editor plugins={plugins} onKeyDown={this.onKeyDown} value={this.state.value} onChange={this.onChange} />
        )
    };
}
```

### testing

```bash
npm run test
```
