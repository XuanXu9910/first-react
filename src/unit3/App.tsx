import React, { useState, useEffect, useMemo, useCallback } from "react";

// useMemo useCallback 使用方法

const App: React.FC = () => {
  console.log("render");

  const [value, setValue] = useState(false);

  // 物件、陣列、函式是以址傳遞，如放入 useEffect 之 dependency array，即使不換實際值，useEffect 仍會執行
  let num = 10;
  let object: object = {};
  let array: number[] = [];
  let fuc = () => {};

  // useMemo(): 將值放入 callback function 並 return 後，即可記憶實際值，以實際值作為比較
  // dependency array 同樣控管何時觸發
  const memoObj = useMemo(() => {
    let mObject: object = {};
    return mObject;
  }, []);

  const memoArray = useMemo(() => {
    let mArray: number[] = [];
    return mArray;
  }, []);

  // 如果是用在 function，會在 callback function 內再放 function
  const memoFunc1 = useMemo(() => {
    let mFunc = () => {};
    return mFunc;
  }, []);
  // 此時建議使用 useCallback() ， 可直接將function 放入第一個參數位置
  const memoFunc2 = useCallback(function () {}, []);

  // 嘗試替換 num, object, array, fuc, memoObj, memoArray, memoFunc1, memoFunc2 至 dependency array
  useEffect(() => {
    console.log("useEffect callback");
  }, [memoFunc2]);

  return (
    <>
      <h1>APP</h1>
      <button
        onClick={() => {
          setValue((prev) => !prev);
        }}
      >
        重新render
      </button>
    </>
  );
};

export default App;
