import './App.css';
import HomePage from './homepage/HomePage';

function App() {
  return (
    <div className="site-wrapper">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/project">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <HomePage />
      
    </div>
  )
}

export default App;
