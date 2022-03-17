import React, {useState} from 'react'


export default function Greeting() {

  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  }

  return (
    <div>
        <h1>Greeting</h1>
        {changeText ? <p>Changed!</p> : <p>Hello World Happy Weekend!</p>}
        <button onClick={changeTextHandler}></button>
    </div>
  )
}
