import React from 'react'; //React needed for the <Component /> Syntax
import ReactDOM from 'react-dom';
class Big extends React.Component {
    constructor(props) {
      super(props)
      this.state = { mytext: 'world' }
    }

    render() {
      return (
        <div>
          <button onClick={() => this.setText()}>Change text with javascript</button>
          <div>
            Hello {this.state.mytext}
          </div>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
		<h1>This is a big component. It was loaded after the rest of the app rendered.</h1>
        </div>
      )
    }

    setText() {
      this.setState({ mytext: 'I used javascript for that so rehydration is needed' })
	}
}
export default Big