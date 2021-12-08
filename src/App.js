import React, {useState,useEffect} from 'react';
import Main from "./Containers/Main";
import Loader from "./Components/Loader/Loader";

function App() {

  const [completed, setCompleted] = useState(false);

   useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  });

  return (
    <div>
    {completed ? <Main /> : <Loader />}
    </div>
  );
}

export default App;
