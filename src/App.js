import logo from './logo.svg';
import './App.css';
import Quiz from './components/qquiz'
import { Provider } from 'react-redux'
import store from './store/index'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Quiz />
      </div>
    </Provider>
  );
}

export default App;
