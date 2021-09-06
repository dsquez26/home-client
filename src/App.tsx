import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import ApiFetch from './api/api';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <ApiFetch />
      <Register />
    </div>

  );
}

export default App;
