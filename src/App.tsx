import './App.css';
import Button from './components/Button';
import iconCart from '../src/assets/cart.png'

function App() {
  return (
    <div className="App">
     <h6>produto</h6>
     <Button value='Add to Cart' icon={iconCart}/>
    </div>
  );
}

export default App;
