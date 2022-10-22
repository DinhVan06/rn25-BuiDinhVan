import React, { Component } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
interface IProps {}

interface IStar {
  star: number;
}

class Star extends Component<IProps, IStar> {
  arrayStar = [1, 2, 3, 4, 5];
  constructor(props: IProps) {
    super(props);
    this.state = {
      star: 0,
    };
  }
  render() {
    return (
      <div style={{textAlign:"center"}}>
        {this.arrayStar?.map((index) => {
          return index <= this.state.star ? (
            <AiFillStar
              key={index}
              onClick={() => this.setState({ star: index })}
            />
          ) : (
            <AiOutlineStar
              key={index}
              onClick={() => this.setState({ star: index })}
            />
          );
        })}
        <span style={{marginLeft:"10px"}}>{this.state.star}</span>
      </div>
    );
  }
}

export default Star;
