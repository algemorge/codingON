import { useState } from 'react'

const Event_ex2 = () => {

   const [clist, setClist] = useState([
      { id: 1, title: '제목', user: '작성자' },
   ]);

   // inputAlpha state : input에 넣는 값에 대한 상태
   const [inputClist, setInputClist] = useState('')

   const enter = () => {
      if (inputClist.trim().length === 0) return
      const newClist = clist.concat({ id: clist.length + 1, alpha: inputClist })
      setClist(newClist)
      setInputClist('')
   }
   const search = () => {

   }

   return (
      <>
         <fieldset>
            <label for='user'>작성자 : </label>
            <input id='user' type="text" placeholder='작성자' />
            <label for='title'>제목 : </label>
            <input id='title' type="text" />
            <button onClick={enter}>작성</button>
         </fieldset>
         <br />
         <select>
            <option>작성자</option>
         </select>
         <input type="text" placeholder='검색어' />
         <button onClick={search}>검색</button>
         <br />
         <br />
         <table border={2} width={400}>
            <thead>
               <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
            </tbody>
         </table>

      </>
   )
}

export default Event_ex2;