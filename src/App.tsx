import './App.scss';
import { Comments } from './components/Comments/Comments';
import { Input } from './components/Input/Input';

const App = () => {
  return (
    <div className="App">
      <Input />
      <Comments/>
    </div>
  );
}

export default App;
