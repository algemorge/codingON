import { useState } from 'react';
import React from 'react';

class TestComponent extends React.Component {
   state = {
      counter: 0
   };
   up = () => {
      this.setState({ counter: this.state.counter + 2 });
   };

   down = () => {
      this.setState({ counter: this.state.counter - 1 });
   };


   render() {
      const { counter } = this.state;
      return (
         <div>
            <h5>{counter}</h5>
            <button onClick={() => this.up()}>+2</button>
            <button onClick={() => this.down()}>-1</button>
         </div>
      );
   }
}


export default TestComponent;