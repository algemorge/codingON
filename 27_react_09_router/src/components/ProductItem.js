import { Link } from "react-router-dom";

const ProductItem = (props) => {
   const { product } = props;
   return (
      <Link to={'/Products/' + product.id}>
         <ul className="ProductItem">
            {/* <li>상품명 : {product.name}</li> */}
            <li>상품명 : {product.name}</li>
            <li>상세설명 : {product.body.slice(0, 10)}...</li>
         </ul>
      </Link >
   )

}

export default ProductItem;