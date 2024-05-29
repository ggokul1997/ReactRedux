import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment,decrement,reset,incrementByAmount} from './slice/counterSlice';
import { useState } from 'react';

function App() {

  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  let [amount,setAmount] = useState(0);
  const resetAll = ()=>{
    dispatch(reset());
    setAmount(0)
  }
  const flip = isNaN(amount)?true:false;
  const addValue = Number(amount)|| 0;

  return (
    <div className="App">
       <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <div style={styles.buttonContainer}>
        <button onClick={()=>{dispatch(increment())}} style={styles.button}>Increase</button>
        <button onClick={()=>{dispatch(decrement())}} style={styles.button}>Decrease</button>
        <button onClick={()=>{resetAll()}} style={styles.button}>Reset</button>
        <button onClick={()=>{dispatch(incrementByAmount(addValue))}}>add</button>
      </div>
      <br/>
      <br/>
      <input value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
      {flip&&<h6>Enter a Numerical value</h6>}
     
      
    </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    
  },
};

export default App;
