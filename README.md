### Filter data on enter handler

Removes any data props which would otherwise be inherited for the enter onKeyDown event

#### usage

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
#### testing

```bash
npm run test
```
