class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log("sad");
    // Change code above this line
  }
  render() {
    console.log("sadsadd");
    return <div>egeg</div>
  }
};

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if (nextProps.value % 2 == 0){
      return true;
    }
    else{
      return false;
    }
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return(
      <div> 
        <h1 style={{color:"red", fontSize:"4em", border:'2px solid black'}}>{this.props.value}</h1>
        {this.props.value>5 && <p>>5</p>}
      </div> 
    )
  }
}

class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  componentDidUpdate(){
    console.log("controller updated")
  }
  render() {
    console.log("controller rendered");
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

const domContainer = document.getElementById("hehe");
ReactDOM.render(<MyComponent3 />, domContainer);