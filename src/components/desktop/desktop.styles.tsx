import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  transition: 0.5s;
  background-color: hsl(0, 0%, 100%);
  width: 70vw;
  max-width: 650px;
  padding: 48px;
  border-radius: 10px 10px 180px 10px;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 750px) {
    justify-content: center;
    padding: 24px;
    width: 60vw;
    border-radius: 16px 16px 100px 16px;
  }
  @media (max-width: 450px) {
    min-width: 300px;
    width: 80vw;
  }
  @media (max-width: 350px) {
    min-width: 200px;
    width: 70vw;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  transition: 0.5s;
  justify-content: flex-start;
  @media (max-width: 750px) {
    justify-content: center;
  }
`;

export const IndividualInputWrapper = styled.div`
  margin-right: 18px;
  transition: 0.5s;
  display: flex;
  @media (max-width: 750px) {
    justify-content: center;

    margin-right: 18px;
  }
`;

export const DividerWrapper = styled.div`
  transition: 0.5s;
  @media (max-width: 750px) {
    margin-top: 42px;
  }
`;

export const Divider = styled.hr`
  transition: 0.5s;
  height: 1px;
  background-color: #ccc;
  border: none;
  width: 100%;
`;

export const ButtonBackground = styled.div`
  background-color: hsl(259, 100%, 65%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  width: 50px;
  height: 50px;
  padding: 18px;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: hsl(0, 0%, 8%);
    cursor: pointer;
  }
  @media (max-width: 750px) {
    position: absolute;
    width: 30px;
    height: 30px;
  }
  @media (max-width: 450px) {
    padding: 12px;
 
  }
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const DateWrapper = styled.div`
  margin-top: 32px;
`;

export const SingleDateWrapper = styled.div`
  transition: 0.5s;
  display: flex;
  font-size: 80px;
  font-weight: 700;
  font-style: italic;

  @media (max-width: 750px) {
    font-size: 50px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
  }
`;

export const Date = styled.p`
  margin: 0;
  color: hsl(0, 0%, 8%);
`;

export const DateNumber = styled.p`
  color: hsl(259, 100%, 65%);
  margin: 0;
`;

export const ImageComponent = styled.img`
  width: 35px;
  height: 35px;
  @media (max-width: 450px) {
    justify-content: center;

    width: 25px;
    height: 25px;
 
  }
`;
