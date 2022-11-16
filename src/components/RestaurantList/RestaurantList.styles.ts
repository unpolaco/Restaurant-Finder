import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 600px;
  overflow-x: auto;
  margin-top: 20px;
  z-index: 12;
  transition: 1s;
`;
export const ListWrapper = styled.div<{ name?: string }>`
  position: relative;
  opacity: 0;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.amber600};
  margin: 5px 0;
  background-color: ${({ theme }) => theme.ghostWhite};
  color: ${({ theme }) => theme.blueGrey900};
  width: 92%;
  height: 70px;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.amber600};
    color: ${({ theme }) => theme.ghostWhite};
  }
`;
export const RestaurantListText = styled.p<{ name?: string }>`
  font-size: ${({name}) => (name ? "1.7rem" : "1.5rem")};
  font-weight: ${({name}) => (name ? "600" : "")};
  margin: 5px;
`;
export const Icon = styled.img<{ src: string }>`
  position: absolute;
  left: 40px;
  top: 0px;
`;
