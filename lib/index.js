import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import NameList from './NameList';

var Root = React.createClass({
  render() {
    return (
      <div>
        <Counter />
        <NameList />
      </div>
    );
  }
});

ReactDOM.render(<Root />, document.getElementById('container'));
