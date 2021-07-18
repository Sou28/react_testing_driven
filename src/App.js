import LoginForm from './LoginForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TDD Basics with React</h1>
      <Loginform submit={values => alert(JSON.stringify(values))}/>
    </div>
  );
}

export default App;
