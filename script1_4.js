class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input:event.target.value
    })
  }

  submitMessage(){
    let intputVal = this.state.input;
    let arr = [...this.state.messages,intputVal];
    this.setState({
      input:'',
      messages:arr
    })

  }

  render() {
    const items = this.state.messages.map((items) => (<li>{items}</li>));

    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input 
        type="text"
        onChange={this.handleChange} 
        value={this.state.input} ></input>
        <button onClick={this.submitMessage}>submit</button>
        <ul>
          {items}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};

const domContainer = document.getElementById("hehe");
ReactDOM.render(<DisplayMessages />, domContainer);