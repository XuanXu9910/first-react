import React, { useState } from "react";

// 1. useState() 基本用法

// 使用 state 使得 function component 變成 stateful
// const App: React.FC = () => {
//   const [counter, setCounter] = useState(0);

//   function counterHandler() {
//     setCounter(counter + 1);
//   }

//   return (
//     <>
//       <h1>Counter: {counter}</h1>
//       <button onClick={counterHandler}>+1</button>
//     </>
//   );
// };

// export default App;

// 2. state 的 batch update: react 會依照情況選擇須不需要立即 re-render
// event bubble: child component 之事件觸發後，會觸發 parent component 之事件
// child clicked 後 -> child onClick 觸發 -> child state 改變 -> (child 不會 re-render） -> parent onClick 觸發 -> parent state 改變 -> 整體-re-render

// const Parent: React.FC = () => {
//   let [count, setCount] = useState(0);
//   return (
//     <div onClick={() => setCount((prev) => prev + 1)}>
//       Parent clicked {count} times
//       <Child />
//     </div>
//   );
// };

// const Child: React.FC = () => {
//   let [count, setCount] = useState(0);
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Child clicked {count} times
//     </button>
//   );
// };

// export default Parent;

// 3. state 安全寫法: 使用 callback function
const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    function cb(prev: number) {
      return prev + 1;
    }
    setCounter(cb);
    setCounter(cb);

    // 錯誤寫法: counter 會皆抓到同個前次 state (0)
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Counter 組件</h1>
      <div>counter: {counter}</div>
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;
