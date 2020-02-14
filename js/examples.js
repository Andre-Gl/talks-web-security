
class SimpleTextInput extends React.Component {
  state = {
    text: "Hello world!"
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          style={{
            fontSize: "40px",
            padding: "10px"
          }}
          onChange={this.handleChange.bind(this)}
          type="text"
        />
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

ReactDOM.render(
    <SimpleTextInput />,
    document.getElementById('SimpleTextInput'),
);
