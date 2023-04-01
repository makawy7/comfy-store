import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { useEffect } from "react";
import { Loading, Error } from "../components";

function SingleProduct() {
  const { productId } = useParams();
  const {
    singleProduct,
    isSingleProductsLoading,
    singleProductsError,
    fetchSingleProduct,
  } = useProductContext();

  console.log(singleProduct);
  useEffect(() => {
    fetchSingleProduct(url + productId);
  }, [productId]);

  if (isSingleProductsLoading) {
    return <Loading />;
  }
  if (singleProductsError) {
    return <Error />;
  }
  return <h1>{productId}</h1>;
}
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
export default SingleProduct;
