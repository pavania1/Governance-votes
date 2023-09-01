import MainPage from './components/MainPage';
import './App.css';
import {data2} from "./components/Data"
function App() {
  console.log(data2)
  return (
    <MainPage cardData={data2}/>
  );
}

export default App;
