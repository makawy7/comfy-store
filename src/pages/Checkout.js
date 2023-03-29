import styled from "styled-components";
import { PageHero } from "../components";

function Checkout() {
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
}
const Wrapper = styled.div``;
export default Checkout;
