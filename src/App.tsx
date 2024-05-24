
import Bai2 from './components/baitap/ss37/Bai2';
import Bai3 from './components/baitap/ss37/Bai3';
import Bai4 from './components/baitap/ss37/Bai4';
import Bai5 from './components/baitap/ss37/Bai5';
import Bai6 from './components/baitap/ss37/Bai6';


import Bai1ss38 from './components/baitap/ss38/Bai1';
import Bai2ss38 from './components/baitap/ss38/Bai2';
import Bai3ss38 from './components/baitap/ss38/Bai3';
import Bai4ss38 from './components/baitap/ss38/Bai4';
import Bai5ss38 from './components/baitap/ss38/Bai5';
import Bai6ss38 from './components/baitap/ss38/Bai6';

export default function App() {
  // const [active,setActive]=useState<boolean>(false);
  // const [count,setCount]=useState<number>(0);
  // const handleClick=()=>{
  //   setActive(!active);
  //   setCount(count+1);
  // }
  // const result = useCallback(()=>{
  //   const getIdProduct =()=>{
  //     console.log('hih');
  //   }
  //   return getIdProduct
  // },[]);
  // console.log('conponent app re-render khi click');
  return (
    <div>
      {/* {active ? <p>xin chào</p> : ''}
      <UseRef></UseRef>
      <Header count={count}></Header>
      <Main getIdProduct={result}></Main>
      <button onClick={handleClick}>click active</button>
      <h1>******************</h1>
      <UseReducer></UseReducer>
      <UseContext></UseContext> */}
      <h1>ss37</h1>
      {/* <Bai1></Bai1> */}
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      {/* <Bai7></Bai7>
      <Bai8></Bai8>
      <Bai9></Bai9>
      <Bai10></Bai10>
      <Bai11></Bai11>
      <Bai12></Bai12> */}
      <h1>ss38</h1>
      <Bai1ss38></Bai1ss38>
      <Bai2ss38></Bai2ss38>
      <Bai3ss38></Bai3ss38>
      <Bai4ss38></Bai4ss38>
      <Bai5ss38></Bai5ss38>
      <Bai6ss38></Bai6ss38>
    </div>
  )
}