import LoginForm from './LoginForm'
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>TDD Basics with React</h1>
      <LoginForm submit={values => alert(JSON.stringify(values))}/>
    </div>
  );
}

export default App;
