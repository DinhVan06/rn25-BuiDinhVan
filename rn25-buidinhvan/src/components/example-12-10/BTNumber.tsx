import React, { Component } from "react";

type Props = {};

type State = {
  numberState: number;
  showComponent: boolean;
};

class BTNumber extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      numberState: 0,
      showComponent: true,
    };

    console.log('contructor');
  }
  componentDidMount(): void {
      console.log('componentDidMount');
  }
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
      console.log('componentDidUpdate');
  }
  componentWillUnmount(): void {
      console.log('componentWillUnmount');
  }
  setNewNumbers = () => {
    this.setState({ numberState: this.state.numberState + 1 });
  };

  handleClick = () => {
    this.setState({showComponent: !this.state.showComponent});
  };
  render() {
    return (
      <div className={`w-50 m-auto mt-3 text-center`}>
        <button onClick={this.setNewNumbers}>INCREMENT</button>
        <br />
        {this.state.numberState}
        <hr />
        <button onClick={this.handleClick}>
          {this.state.showComponent ? "Open Countdown" : "Close Countdown"}
        </button>
      </div>
    );
  }
}

export default BTNumber;
