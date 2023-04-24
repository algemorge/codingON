import { useState } from 'react';

// Ver 1
// const Alphabet = () => {
//    const [alphabet, setAlphabet] = useState(['a', 'p', 'p', 'l', 'e']);
//    console.log(alphabet); // ['a', 'p', 'p', 'l', 'e']
//    return (
//       <>
//          <ol>
//             {alphabet.map((value, idx) =>
//                <li key={idx}>{value}</li>
//             )}
//          </ol>
//       </>
//    )
// }

// Ver 2
const Alphabet = () => {
   const [alphabet, setAlphabet] = useState([
      { id: 1, alpha: 'a' },
      { id: 2, alpha: 'b' },
      { id: 3, alpha: 'c' },
      { id: 4, alpha: 'd' },
      { id: 5, alpha: 'e' },
   ]);

   // inputAlpha state : input에 넣는 값에 대한 상태
   const [inputAlpha, setInputAlpha] = useState('')

   const addAlpha = () => {
      if (inputAlpha.trim().length === 0) return
      const newAlphabet = alphabet.concat({ id: alphabet.length + 1, alpha: inputAlpha })
      setAlphabet(newAlphabet)
      setInputAlpha('')
   }

   const deleteAlpha = (id) => {
      const newAlpha = alphabet.filter((obj) => obj.id !== id)
      setAlphabet(newAlpha)
   }
   const activeEnter = (e) => {
      if (e.key === 'Enter') addAlpha()
   }

   return (
      <>
         <input
            type="text"
            value={inputAlpha}
            onChange={(e) => setInputAlpha(e.target.value)}
            onKeyDown={(e) => activeEnter(e)} />
         <button onClick={addAlpha}>추가</button>
         <ol>
            {alphabet.map((obj) =>
               <li key={obj.id} onDoubleClick={() => deleteAlpha(obj.id)}>{obj.alpha}</li>
            )}
         </ol>
      </>
   )
}

export default Alphabet;