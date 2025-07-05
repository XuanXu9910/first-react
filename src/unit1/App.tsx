import React from "react";

// HOC 寫法

type BProps = {
  totalScore: number;
};
type BState = {
  // totalScore: number;
};

type AProps = {
  totalScore: number;
};
type AState = {
  // totalScore: number;
};

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

class ScoreBoardB extends React.Component<BProps, BState> {
  // constructor(props: BProps) {
  //   super(props);
  //   this.state = {
  //     totalScore: 0,
  //   };
  // }

  // 組件被安裝時
  // componentDidMount() {
  //   this.setState({
  //     totalScore: getCurrentScore() + getScoreByBoardName("boardB"),
  //   });
  // }

  render(): React.ReactNode {
    return (
      <>
        {/* <p>B Total Score: {this.state.totalScore}</p> */}
        <p>B Total Score: {this.props.totalScore}</p>
      </>
    );
  }
}

class ScoreBoardA extends React.Component<AProps, AState> {
  // constructor(props: AProps) {
  //   super(props);
  //   this.state = {
  //     totalScore: 0,
  //   };
  // }

  // 組件被安裝時
  // componentDidMount() {
  //   this.setState({
  //     totalScore: getCurrentScore() + getScoreByBoardName("boardA"),
  //   });
  // }

  render(): React.ReactNode {
    return (
      <>
        {/* <p>A Total Score: {this.state.totalScore}</p> */}
        <p>A Total Score: {this.props.totalScore}</p>
      </>
    );
  }
}

// HOC寫法！
// 每次 return 一個新的 class(component)
// 將共用的邏輯從其他 component 中抽離出來
function withTotalScore(
  WrappedComponent: React.ComponentType<any>,
  boardName: string
) {
  return class extends React.Component<{}, { score: number }> {
    constructor(props: {}) {
      super(props);
      this.state = {
        score: 0,
      };
    }
    componentDidMount() {
      this.setState({
        score: getCurrentScore() + getScoreByBoardName(boardName),
      });
    }

    render(): React.ReactNode {
      // WrappedComponent 指的就是 ScoreBoardA 或 ScoreBoardB
      return <WrappedComponent totalScore={this.state.score} />;
    }
  };
}

function App() {
  const WrappedComponentA = withTotalScore(ScoreBoardA, "boardA");
  const WrappedComponentB = withTotalScore(ScoreBoardB, "boardB");
  return (
    <>
      {/* <ScoreBoardA />
      <ScoreBoardB /> */}
      <WrappedComponentA />
      <WrappedComponentB />
    </>
  );
}

export default App;
