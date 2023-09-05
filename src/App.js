import MainPage from './components/MainPage';
import './App.css';
import {data2} from "./components/Data";
import Screenshot from './components/Screenshot';
import Date from './components/Date';
function App() {
  console.log(data2)
  return (
    <div>
   <Date/>
  
    <Screenshot/>
    
    </div>
  );
}

export default App;
