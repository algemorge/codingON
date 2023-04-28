import { useSearchParams, useNavigate } from 'react-router-dom';

const MainPage = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   console.log(searchParams.get('mode')); // get() : 쿼리스트링 key 의 value값 확인
   // / => null
   // /?mode=Dark => Dark
   const navigate = useNavigate();

   return (
      // <main className={`MainPage ${searchParams.get('mode')}`}>
      <main className={['MainPage', searchParams.get('mode')].join(' ')}>
         <h1>여기는 홈!</h1>
         <button onClick={() => setSearchParams({ mode: 'Dark' })}>
            다크모드
         </button>
         <button onClick={() => navigate('/')}>홈으로</button>

      </main>
   );
};

export default MainPage;