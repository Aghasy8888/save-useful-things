import { Provider } from 'react-redux';
import './App.css';
import { ToDo } from './components';
import { store } from './redux/store';

function App() {
  // const [name, setName] = useState('');
  // const [id, setId] = useState(0);



  return (
    <>
      {/* <GlobalContext.Provider value={{ id, name, setId, setName }}>
        <SayHello />
      </GlobalContext.Provider> */}
    <Provider store={store}>
      <ToDo />
    </Provider>
      
    </>
  );
}

export default App;
