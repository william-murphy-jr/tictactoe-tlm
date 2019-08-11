import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // console.log('props.value: ', props.value)÷
  render() {
    return (
      <button className="square" onClick ={ () => {this.setState({ value: "X" })} } >
        { this.state.value }
      </button>
    );

  }
}

export default Square;