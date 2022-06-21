import logo from './logo.svg';
import './App.css';
import RandomNumber01 from './components/RandomNumber01';
import RandomNumber02 from './components/RandomNumber02';
import MoreContent from './components/MoreContent';
import ShowUsers from './components/ShowUsers';
import Login from './components/Login';
import AppEffect from './components/AppEffect';

function App() {
  return (
    <div style={{
      margin: '3%'
    }}>
     {/* <MoreContent /> */}
     {/* <ShowUsers /> */}
     {/* <Login /> */}
     <AppEffect />
    </div>
  );
}

export default App;
