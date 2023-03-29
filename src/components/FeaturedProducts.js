import { useProductContext } from "../context/products_context";
import { Loading, Error } from "../components";
import styled from "styled-components";

function FeaturedProducts() {
  const { isProductsLoading, productsError, featuredProducts } =
    useProductContext();

  if (isProductsLoading) {
    return <Loading />;
  }
  if (productsError) {
    return <Error />;
  }
  return <h1>FeaturedProducts</h1>;
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
