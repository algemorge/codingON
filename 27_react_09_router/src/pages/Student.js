import { useSearchParams, useNavigate, useParams } from "react-router-dom";

// const Student = () => {
//    const { name } = useParams()
//    // const navigate = useNavigate()
//    // const [searchParams, setSearchParams] = useSearchParams()
//    // console.log(searchParams.get('sean'));

//    return (
//       <main className={["student", searchParams.get('sean')]}>
//          <div>학생의 이름은 {setSearchParams({})}입니다. </div>
//       </main>
//    )
// }
// export default Student;

const Student = () => {
   const { name } = useParams()
   console.log(name);

   const navigate = useNavigate()

   const [searchParams] = useSearchParams()
   const keyword = searchParams.get('name')

   return (
      <div>
         <h3>학생의 이름은 <span style={{ color: "green" }}>{name}</span> 입니다.</h3> <br />
         {keyword && (
            <h3> 실제 이름은 <span style={{ color: 'red' }}>{keyword}</span> 입니다.</h3>
         )}
         <button onClick={() => navigate(-1)}>이전페이지로 </button>
      </div>
   );
};

export default Student;