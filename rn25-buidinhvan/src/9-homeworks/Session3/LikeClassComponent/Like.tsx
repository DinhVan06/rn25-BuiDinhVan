import React, { Component } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
interface IProps {}

interface IState {
  checkLikes: boolean;
}

class Like extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      checkLikes: false,
    };
  }
  handleLike = () => {
    this.setState({
      checkLikes: !this.state.checkLikes,
    });
  };
  render() {
    return (
      <div style={{ margin: "20px", textAlign:"center" }}>
        <button onClick={this.handleLike}>
          {this.state.checkLikes ? <AiFillLike /> : <AiOutlineLike />}
          {this.state.checkLikes? "Bỏ thích" : "thích"}
        </button>
      </div>
    );
  }
}

export default Like;
