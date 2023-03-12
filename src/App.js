import './App.css';
import Encryptions from './component/encryptions';
import MyComponent from './component/myComponent';
function App() {
  var enc=new Encryptions();
  var dec=new Encryptions();

  function handleClicken(input){
    const result= enc.encryption(input)
    return result.toString();
  }
  function handleClickdec(input){
    const result= dec.decryption(input)
    return result.toString();
  }
  return (
    <div className="App">
      <MyComponent  handleClick={handleClicken} process={'encrypt'}/>
      <MyComponent  handleClick={handleClickdec} process={'decrypt'}/>
    </div>
  );
}

export default App;
