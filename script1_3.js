const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    };
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item, index) => <li key={index}>{item}</li>);
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <div className="row">
          <div className="col-xs-3 text-center">
            <button className="btn btn-primary btn-block"><i className="fa fa-paper-plane">Create List</i></button>
          </div>
          <div className="col-xs-3 text-center">
            <button className="btn btn-danger btn-block"><i className="fa fa-trash">Create List</i></button>
          </div>
        </div>
        <h1 className="jQueryBootstrap btn" id="target1">My <span id="target2">"To Do"</span> List:</h1>
        <h3 id="target3">jQuery will remove this!</h3>
        <h3 id="target4">jQuery will clone and move (append) to target2!</h3>
        <ul>{items}</ul>
      </div>
    );
  }
}

const domContainer = document.getElementById("hehe");
ReactDOM.render(<MyToDoList />, domContainer);