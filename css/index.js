function Header({...params}){
    return (
        <h1 style={{color}}>Hello Style!</h1>
    )
}


var root = document.getElementById('root');
ReactDOM.render(<Header/>, root);
