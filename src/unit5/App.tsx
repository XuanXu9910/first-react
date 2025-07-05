import React, { useState, useEffect } from "react";

// 使用 useEffect 進行狀態重置

let interval: NodeJS.Timer;
let num = 0;

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  // 於 useEffect 的 callback function 中的 return 裡放置狀態清除指令(cleanup function)
  // 會於下次 useEffect 觸發時，先執行 cleanup function，才執行其他部份
  useEffect(() => {
    interval = setInterval(() => {
      num++;
      console.log(num);
    }, 1000);
    console.log("render");

    return () => {
      console.log("pre re-render");
      if (interval !== null) {
        clearInterval(interval);
        num = 0;
      }
    };
  }, [counter]);

  const clickHandler = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>計時器: {counter}</h1>
      <button onClick={clickHandler}>+1</button>
    </>
  );
};

export default App;

// 補充說明:預設情況下（開發時，且有 <React.StrictMode>），這兩個 useEffect 會多執行一次
// 第一次不需要執行 cleanup function ，所以直接 render
// 第二次需要執行 cleanup function，所以 pre re-render --> render
