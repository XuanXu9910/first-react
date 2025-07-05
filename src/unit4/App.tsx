import React, { useEffect, useState } from "react";

// useEffect() 常用情況

const App: React.FC = () => {
  // 1. 模擬類似 mount 效果(function component 無法像 class component 寫 componentDidMount())
  // useEffect(callback function, dependency array)
  // dependency array 為空 代表在在第一次渲染後執行 callback function
  useEffect(() => {
    console.log("hello");
  }, []);

  // 2. 建立某些 state 之間之橋樑
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("偶數");

  // 錯誤寫法： state 改變，導致 component 一直重複渲染，無窮迴圈
  //   console.log("text", text);
  //   if (counter % 2 === 0) {
  //     setText("偶數");
  //   } else {
  //     setText("奇數");
  //   }

  // dependency array 為 counter， 代表監控 counter 變化，有變化時執行 callback function
  // re-render 時，不影響 useEffect() 裡包住的東西
  useEffect(() => {
    console.log("counter變化", counter);
    if (counter % 2 === 0) {
      setText("偶數");
    } else {
      setText("奇數");
    }
  }, [counter]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>count: {counter}</h1>
      <button onClick={handleClick}>+1</button>
      <p>{text}</p>
    </>
  );
};

export default App;

// 補充說明:預設情況下（開發時，且有 <React.StrictMode>），這兩個 useEffect 都會被執行兩次
