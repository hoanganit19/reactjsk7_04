import logo from './logo.svg';
import './App.css';

// import RandomNumber01 from './components/RandomNumber01';
// import RandomNumber02 from './components/RandomNumber02';
// import MoreContent from './components/MoreContent';
// import ShowUsers from './components/ShowUsers';
// import Login from './components/Login';
// import AppEffect from './components/AppEffect';
// import MyContext from './components/MyContext';
import CounterHandle from './components/CounterHandle';

import { Reducer, useReducer } from 'react';

function nameReducer(previousName, newName){
  return newName;
}

const initialNameValue = 'Hoàng An'

function NameInput(){
    const [name, setName] = useReducer(nameReducer, initialNameValue);
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
      <>
        <input type="text" defaultValue={name} onChange={handleChange} />
        <div>
          {name}
        </div>
      </>
    );
}

// const countReducer = (state, newState) => {
  
//   return newState;
// } 

// const countReducer = (state, action) => {
  
//     // console.log({
//     //   ...state, ...action
//     // });

//     return {
//       ...state,
//       ...action
//     }
// }

// const countReducer = (state, action) => {
  
//     return {
//       ...state,
//       ...(typeof action==='function'?action(state):action)
//     }
// }

const countReducer = (state, action) => {
  const {type, step} = action;
  switch (type){
    case 'up':
      return {
        ...state,
        count: state.count+step
      } 
    break;

    case 'down':
      return {
        ...state,
        count: state.count-step
      } 
    break;

    default:
      console.log('Không hợp lệ');
    break;
  }
}


//destruct
function Counter({initialCount=0, step=1}){

  //const {initialCount, step} = props;

  //const [count, setCount] = useReducer(countReducer, initialCount); 

  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount
  });

  const {count} = state;

  const countUp = () => {
    // setState({
    //   count: count+step
    // })



    // setState(
    //   //currentState => ({count: currentState.count + step})
    //   (current) => {
        
    //     return {
    //         count: current.count + step
    //     }
    //   }
    // );

    dispatch({
      type: 'up',
      step
    })

  }

  const countDown = () => {
    dispatch({
      type: 'down',
      step
    })
  }

  return (
      <>
       <button type='button' onClick={countUp}>Tăng ({count})</button>
       <button type='button' onClick={countDown}>Giảm ({count})</button>
      </>
  );
}

function App() {
  return (
    <div style={{
      margin: '3%'
    }}>
     {/* <MoreContent /> */}
     {/* <ShowUsers /> */}
     {/* <Login /> */}
     {/* <AppEffect /> */}
     {/* <MyContext /> */}
     {/* <CounterHandle /> */}
     {/* <NameInput /> */}
     <Counter/>
    </div>
  );
}


export default App;
