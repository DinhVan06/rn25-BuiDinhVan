// Class component: tsrce

import React, { Component } from "react";

type Props = {
  contentProps: string;
  numberProps: number;
  loginProps: boolean;
};

type State = {};

export default class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <header>
          <div className="header">
            <h1>The Pulpit Rock</h1>
          </div>
        </header>

        <button className="btn btn-success">
          {!this.props.loginProps ? "Log in" : "Log out"}
        </button>
        <p>{this.props.contentProps}</p>
        <p>{this.props.numberProps}</p>
      </>
    );
  }
}
