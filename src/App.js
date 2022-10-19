import Signin from './components/Signin'
import Signup from './components/Signup';
import './App.css'



function App() {
  return (
    <div className="App">
      <nav className='grammerly'>
        <img className='img' src='https://static.grammarly.com/assets/files/cb6ce17d281d15f2c819035bcd430b0e/ukraine_grammarly_logo.svg' alt='image' />
      </nav>
      <Signin />
      {/* <Signup /> */}
    </div>
  );
}

export default App;
