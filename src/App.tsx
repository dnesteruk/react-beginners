import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';

const user = { userName: 'Dmitry' }

const App = () => (
  <div className="App">
    <Header slogan='Slogan company' />
    <h1>Hello World! {user.userName}</h1>
    <Footer copyright='C' />
  </div>
)

export default App;
