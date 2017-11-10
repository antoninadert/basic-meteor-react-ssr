
import React from 'react'; //React needed for the <Component /> Syntax
import ReactDOM from 'react-dom';
import { Big } from '/imports/Big/Big';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <Big />
      </div>
    );
  }
}

export default App