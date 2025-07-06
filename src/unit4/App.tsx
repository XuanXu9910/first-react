import React, { useState, useMemo, memo } from "react";

// memo 使用方式

type PropsB = {
  num: number;
  obj: { name: string };
};

// 在 component 中使用 memo
// 其參數中的物件的所有變數會分別獨立判斷是否有變化
// 如有變化才重新渲染該 component
// 不受 父component 影響
const B: React.FC<PropsB> = memo(({ num, obj }) => {
  console.log("render B", num);
  return (
    <p>
      B {num} {obj.name}
    </p>
  );
});

const App: React.FC = () => {
  console.log("render APP");
  const [value, setValue] = useState(false);
  const [num, setNum] = useState(0);
  const [obj, setObj] = useState({ name: "" });

  // 當 obj.name 有變化時，才重新回傳新的物件，以觸發 memo component 的 re-render
  const memoObj = useMemo(() => {
    return obj;
  }, [obj.name]);

  return (
    <>
      <h1>APP</h1>
      <B num={num} obj={memoObj} />
      <button
        onClick={() => {
          setValue(!value);
        }}
      >
        重新render
      </button>
      <button
        onClick={() => {
          setNum(100);
        }}
      >
        設定顯示的數字
      </button>
      <button
        onClick={() => {
          setObj({ name: "Alan" });
        }}
      >
        設定顯示的名字
      </button>
    </>
  );
};

export default App;
