import logo from './logo.svg';
import { connect } from 'react-redux'
import { addwish, anothername } from './actions/myaction'
import './App.css';

function App(props) {

const mywish=props.mywish.map(item=>{
  return<h2 key={Math.random()}>{item}</h2>
})
  return (

    <div className="App">
     <h1>my name is {props.myname}</h1>
     {mywish}
     <button onClick={()=>{props.changeName()}}>change it</button>
     <button onClick={()=>{props.addwish()}}>change it</button>

    </div>
  );
}
const mapStateToProps=(state)=>{
  return {
    myname:state.name,
    mywish:state.wish
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    changeName:()=>{dispatch(anothername())},
    addwish:()=>{dispatch(addwish())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
