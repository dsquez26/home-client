import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import ApiFetch from './api/api';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <ApiFetch />
    </div>

  );
}

export default App;
