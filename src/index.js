
function TextField(props) {
  return React.createElement(
    'label',
    null,
    `${props.label}: `,
    React.createElement('input', {
      name: props.name,
    })
  );
}

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(TextField, { label: 'Email', name: 'email' }),
    React.createElement(TextField, { label: 'Password', name: 'password' })
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
);
