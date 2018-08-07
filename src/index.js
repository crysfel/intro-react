
function TextField(props) {
  return React.createElement(
    'label',
    null,
    `${props.label}:`,
    React.createElement(
      'input',
      {
        onChange: props.onChange,
        placeholder: props.placeholder,
        type: 'text',
        value: props.value,
    })
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
    };
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        TextField,
        {
          label: 'First name',
          name: 'firstname',
          onChange: (event) => this.setState({ first: event.target.value }),
          placeholder: 'What\'s your name?',
          value: this.state.first,
        }
      ),
      React.createElement(
        TextField,
        {
          label: 'Last name',
          name: 'lasttname',
          onChange: (event) => this.setState({ last: event.target.value }),
          placeholder: 'What\'s your last name?',
          value: this.state.last,
        }
      )
    );
  }
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
);

