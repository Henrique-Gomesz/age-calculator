import { styled } from "styled-components";

interface ErrorProps {
  hasError: boolean;
}

export const MainWrapper = styled.div`
  width: 15vw;
  max-width: 135px;
  display: flex;
  flex-direction: column;
  @media (max-width: 450px) {
    width: 20vw;
  }

  @media (max-width: 450px) {
    width: 20vw;
  }

`;

export const Input = styled.input<{ error: ErrorProps }>`
  font-size: 28px;
  padding: 10px;
  font-weight: 700;
  color: hsl(0, 0%, 8%);
  background-color: hsl(0, 0%, 100%);
  border-color: ${(props) =>
    props.error.hasError ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)"};
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  transition: 0.5s;
  &:focus {
    transition: 0.5s;
    outline: none;

    border-color: ${(props) =>
      props.error.hasError ? "hsl(0, 100%, 67%)" : "hsl(259, 100%, 65%);"};
  }
  @media (max-width: 750px) {
    font-size: 20px;
  }

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const InputLabelWrapper = styled.div`
  margin-bottom: 8px;
`;

export const InputLabel = styled.label<{ error: ErrorProps }>`
  margin: 0;
  color: ${(props) =>
    props.error.hasError ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)"};
  letter-spacing: 4px;
  font-size: 12px;
  font-weight: 700;
  @media (max-width: 450px) {
    font-size: 8px;
  }
`;

export const ErrorWrapper = styled.div`
  margin-top: 6px;

`;

export const ErrorMessage = styled.p`
  color: hsl(0, 100%, 67%);
  font-size: 12px;
  font-style: italic;
  margin: 0;
  @media (max-width: 750px) {
    font-size: 8px;
  }
`;
