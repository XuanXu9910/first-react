import React, { useState } from "react";

// Functional component 與 useState() 搭配寫法

// 作為泛型，須宣告組件的 Props 的資料型態
type BtnProps = {
  currentNum: number;
  onClickHandler: () => void;
};

// currentNum 是 Props: 用來將父組件之參數傳遞給子組件
const Btn: React.FC<BtnProps> = ({ currentNum, onClickHandler }) => {
  // let currentNum = 1;
  // function counter() {
  //   currentNum = currentNum + 1;
  //   console.log(currentNum);
  // }

  return (
    // <button onClick={counter}>
    //   加1，
    //   <span>目前的總數: {currentNum}</span>
    // </button>

    <button onClick={onClickHandler}>
      加1，
      <span>目前的總數: {currentNum}</span>
    </button>
  );
};

const App: React.FC = () => {
  // const num = 0; // 改用 useState() 取代

  // useState(): 用來使變數改變值時，重新渲染畫面
  const [num, setNum] = useState(1);

  function counter() {
    setNum(num + 1);
  }

  return (
    <>
      <h1>計數器:{num}</h1>
      <Btn currentNum={num} onClickHandler={counter} />
    </>
  );
};

export default App;
