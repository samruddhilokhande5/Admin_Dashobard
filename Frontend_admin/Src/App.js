
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Sidebar></Sidebar>
      <div className='SideContent' style={{width: "calc(100% - 150px)"}}>
      <Header></Header>
      <MainContent></MainContent>
      </div>
 </div>
 </BrowserRouter>
  );
}

export default App;
