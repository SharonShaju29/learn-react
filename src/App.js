import "./App.css";
import Sample from './components/sample'
import Message from './components/Class'
import State from './components/state'
import Binding from './components/binding'

function App() {
  return (
    <div className="App">
      <Sample props="sad life? No!!!"/>
      <Sample props="CodingLust"><h2>childrens</h2></Sample>
      <Message propsToClass="props to Class"/>
      <State/>
      <Binding/>
    </div>
  );
}

export default App;
