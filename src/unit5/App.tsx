import React from "react";

// Class component 與 useState() 搭配寫法

// 1. props state
// 2. 生命週期

type BtnProps = {
  currentNum: number;
  clickHandler: () => void;
};
type BtnState = {};

class Btn extends React.Component<BtnProps, BtnState> {
  constructor(props: BtnProps) {
    super(props);
  }

  // 組件將要被解安裝時: number;
  componentWillUnmount(): void {
    console.log("Btn unmount");
  }

  render(): React.ReactNode {
    return (
      <button onClick={this.props.clickHandler}>
        加1，
        <span>目前的總數: {this.props.currentNum}</span>
      </button>
    );
  }
}

type AppProps = {};
type AppState = {
  num: number;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      num: 1,
    };

    // 這一段程式碼，是保證 this 永遠指向 APP ，不管是 window 還是其他物件執行
    this.counter = this.counter.bind(this);
  }

  counter() {
    this.setState((prevState) => {
      return {
        num: prevState.num + 1,
      };
    });
  }

  // 組件被安裝時
  componentDidMount(): void {
    console.log("mount");
  }

  // 組件被更新時
  componentDidUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<AppState>,
    snapshot?: any
  ): void {
    console.log("update");
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>計數器: {this.state.num}</h1>
        {this.state.num === 5 ? null : (
          <Btn currentNum={this.state.num} clickHandler={this.counter}></Btn>
        )}
      </>
    );
  }
}

export default App;
