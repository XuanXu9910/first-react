import React, { useState, useRef } from "react";

// useRef() 用來在 re-render 時避免狀態重設
// useRef() 狀態改變不會觸發 re-render

const App: React.FC = () => {
  const [show, setShow] = useState(false);

  const sumRef = useRef(0);

  console.log("sumRef.current", sumRef.current);

  function click() {
    sumRef.current = sumRef.current + 1;
    console.log("sumRef.current", sumRef.current);

    if (sumRef.current === 2) {
      setShow(true);
    } else if (sumRef.current > 5) {
      setShow(false);
    }
  }

  //   let sum = 0;
  //   console.log("sum", sum);
  //   function click() {
  //     sum = sum + 1;
  //     console.log("sum", sum);
  //     if (sum === 2) {
  //       setShow(true);
  //     } else if (sum > 5) {
  //       setShow(false);
  //     }
  //   }

  return (
    <>
      <h1>Ref</h1>
      <button onClick={click}>+1</button>
      {show && <div>被隱藏的區塊</div>}
    </>
  );
};

export default App;

// React 18 的 <React.StrictMode> 會讓 function component 重新掛載兩次
