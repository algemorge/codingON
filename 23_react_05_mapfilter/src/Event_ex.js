import { useState } from 'react'

const Event_ex = () => {
   const [name, setName] = useState([
      { id: 1, name: '코디', email: 'codi@gamil.com' },
      { id: 2, name: '윤소희', email: 'yoonsohee@gmail.com' },
   ]);

   const [inputName, setInputName] = useState('')
   const [inputEmail, setInputEmail] = useState('')

   const enter = () => {
      if (inputName.trim().length === 0) return
      const newName = name.concat({ id: name.length + 1, name: inputName, email: inputEmail })
      setName(newName)
      setInputName('')
      setInputEmail('')
   }

   const deleteName = (id) => {
      const newName = name.filter((obj) => obj.id !== id)
      setName(newName)
   }
   const activeEnter = (e) => {
      if (e.key === 'Enter') enter()
   }

   return (
      <>
         <input
            type="text"
            placeholder="이름"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
         />

         <input
            type="text"
            placeholder="이메일"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            onKeyDown={(e) => activeEnter(e)} />

         <button onClick={enter}>등록</button>

         <ul style={{ listStyle: 'none' }}>
            {name.map((obj) =>
               <li key={obj.name} onDoubleClick={() => deleteName(obj.id)}>{obj.name} : {obj.email}</li>
            )}
         </ul>
      </>
   )
}

export default Event_ex;