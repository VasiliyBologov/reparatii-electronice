import './App.css';
import TopBar from './components/TopBar';

import Home from '../src/pages/Home'
import Produse from '../src/pages/Produse'
import Router from './routes';

export default function App() {
  return (
    <div className="App">
      {/* <TopBar /> */}
      <Router/>
    </div>
  );
}

