function Button(props) {
	return (
    <button onClick={()=>props.onClickFuntion(props.increment)}>
      +{props.increment}
    </button>);
}

//Display
function Display(props){
  return (
    <div>
      {props.message}
    </div>
  )
}

function App(){
  const [counter,setCounter] = useState(41);
  const incrementCounter = (increment) => setCounter(counter+increment);
  return (
    <div>
      <Button 
        onClickFuntion={incrementCounter} 
        increment={1}
        />
       <Button 
        onClickFuntion={incrementCounter} 
        increment={5}
        />
       <Button 
        onClickFuntion={incrementCounter} 
        increment={10}
        />
      <Button 
        onClickFuntion={incrementCounter} 
        increment={100}
        />
      <Display message={counter} />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),
);