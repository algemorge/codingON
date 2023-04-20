import React from 'react';

class ClassComponent extends React.Component {

   constructor() {
      super()
      this.state = {
         name: 'Codingon',
      };

      // bind 의 역할 : constructor를 잡아줌
      // this.printConsole = this.printConsole.bind(this)
   }

   // printConsole() {
   //    console.log('버튼 클릭! >> ', this.state);
   // }

   // 화삻표 함수 사용 -> bind 필요없음
   printConsole = () => {
      console.log(this);
      console.log('버튼 클릭! >> ', this.state);
   }

   printConsole2 = (msg) => {
      console.log(msg);
   }
   render() {
      return (
         <div>
            {/* this.printConsole */}
            1. 클래스형 컴포넌트에서 이벤트 사용해보기 <br />
            <button onClick={this.printConsole}>print console</button> <br />
            2. 함수에 인자 보내기 <br />
            <button onClick={() => this.printConsole2('hihi')}>print msg</button> <br />


         </div>
      );
   }
}

export default ClassComponent;