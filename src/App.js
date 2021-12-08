import Recruitment from "./Containers/Recruitment";
import Login from "./Components/Login/Login";
import OurProjects from "./Components/OurProjects/Ourprojects"


function App() {
  return (
    <div className="App" style={{background:"black"}}>
      <header className="App-header">
        {/* <Recruitment /> */}
        <OurProjects/>
      </header>
    </div>
  );
}

export default App;
