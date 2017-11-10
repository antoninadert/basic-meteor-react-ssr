Big({
	mytext: 'world',
	setText() {
		this.mytext('I used javascript for that so rehydration is needed')
	},
	render() {
		<div>
			<button b="click: setText">Change text with javascript</button>
			<div>
				Hello {this.mytext()}
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
	}
})