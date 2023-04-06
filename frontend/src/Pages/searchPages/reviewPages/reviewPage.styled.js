import styled from "styled-components";

export const ReviewGrid = styled.div`
  display: grid;
  align-self: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  height: 100%;
  width: 80rem;
  gap: 2rem;
  justify-items: center;
  margin: 1rem 0;
  flex-grow: 1;
`;
