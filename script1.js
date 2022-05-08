/*import {subtract} from './subtract';
console.log(subtract(2,3));*/

/*
npm install -g http-server
http-server -c-1
*/

console.log(React.version);

/*const FirstComponent = function (){
	return <h1>Hey hey!!!</h1>
};*/

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
      
    // Change code above this line
  }
  render() {
    return (
      <div>
               <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};

const domContainer = document.getElementById("hehe");
ReactDOM.render(<MyForm />, domContainer);