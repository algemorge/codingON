import { useParams, useNavigate } from "react-router-dom";

const ProductDetaulPage = (props) => {
   const { products } = props;
   console.log(products);

   const { productId } = useParams() // 구조분해할당
   console.log(productId); // {productId: '1'} -> 1

   // targetProduct 변수에 productId 에 해당하는 상품 객체를 저장
   // filter() 사용
   // 내 풀이 -> 실패~ 이유 : productId.filter 로 함.
   const [targetProduct] = products.filter((result) => result.id === Number(productId));
   console.log(targetProduct);

   const navigate = useNavigate();

   // 정답 풀이
   // products 에서 가져오는 거였음
   // const [targetProduct] = products.filter((p) => p.id === Number(productId))
   // console.log(targetProduct);

   if (!targetProduct) {
      return <main className="ProductDetailPage"> 존재하지 않는 상품입니다.</main>
   }

   return (
      <main className="ProductDetailPage">
         <h1>여기는 상품 디테일 페이지  </h1>
         <button onClick={() => navigate(-1)}>목록보기</button>
         <button onClick={() => navigate('/')}>홈으로</button>
         <ul>
            <li>판매 번호 : {targetProduct.id}</li>
            <li>상품명 : {targetProduct.name}</li>
            <li>판매처 : {targetProduct.email} </li>
            <li>상세설명 : {targetProduct.body} </li>
         </ul>
      </main>
   )
}

export default ProductDetaulPage;