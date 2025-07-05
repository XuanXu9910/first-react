import React, { useState, useEffect } from "react";

// 使用 React Hook 取代複雜的 HOC 寫法

// --------------------------------------------------------
// 模擬取得分數的API

function getCurrentScore() {
  return 100;
}

function getScoreByBoardName(boardName: String) {
  if (boardName === "boardA") {
    return 200;
  }
  if (boardName === "boardB") {
    return 1000;
  }
  return 0;
}

// --------------------------------------------------------
// 自定義的 hook
// 須遵守以 useXXX 為開頭的命名
function useGetTotalScore(boardName: String) {
  // 不能在使用 hook 時，在其程式邏輯中添加如條件式導致最後每次 hook 渲染順序不一樣

  const [score, setScore] = useState(0);
  useEffect(() => {
    const currentScore = getCurrentScore() + getScoreByBoardName(boardName);
    setScore(currentScore);
  }, []);
  return score;
}

// --------------------------------------------------------

const ScoreBoardB: React.FC = () => {
  //   const [score, setScore] = useState(0);
  //   useEffect(() => {
  //     const currentScore = getCurrentScore() + getScoreByBoardName("boardB");
  //     setScore(currentScore);
  //   }, []);
  const score = useGetTotalScore("boardB");
  return <p>B Total Score: {score}</p>;
};

const ScoreBoardA: React.FC = () => {
  //   const [score, setScore] = useState(0);
  //   useEffect(() => {
  //     const currentScore = getCurrentScore() + getScoreByBoardName("boardA");
  //     setScore(currentScore);
  //   }, []);
  const score = useGetTotalScore("boardA");
  return <p>A Total Score: {score}</p>;
};

const App: React.FC = () => {
  return (
    <>
      <ScoreBoardA />
      <ScoreBoardB />
    </>
  );
};

export default App;
