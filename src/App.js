import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {

  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);


  console.log('APP RUNNING');

  const toggleParaHandler = useCallback(() => {
    if(allowToggle){
      setShowPara((showPara) => !showPara)
    }  
  },[allowToggle]);

  const alowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (

    <div className="app"> 
      <h1>Hi there!</h1>    
      <DemoOutput show={showPara}/>
      <Button onClick={alowToggleHandler}>Click Me First</Button>
      <Button onClick={toggleParaHandler}>Click Me</Button>
     
    </div>
    
  );
}

export default App;