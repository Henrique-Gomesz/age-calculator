import {
  Input as BaseInput,
  InputLabel,
  InputLabelWrapper,
  MainWrapper,
  ErrorWrapper,
  ErrorMessage,
} from "./input.styles";

interface Props {
  inputLabel: string;
  onChange: (text: string) => void;
  value: string;
  hasError: boolean;
  errorMessage: string;
  placeholder: string;
  maxLength: number;
}

export const Input = ({
  errorMessage,
  hasError,
  inputLabel,
  onChange,
  placeholder,
  maxLength,
  value,
}: Props) => {
  return (
    <MainWrapper>
      <InputLabelWrapper>
        <InputLabel error={{ hasError: hasError }}>{inputLabel}</InputLabel>
      </InputLabelWrapper>

      <BaseInput
        inputMode="numeric"
        maxLength={maxLength}
        error={{ hasError: hasError }}
        onChange={(event) => onChange(event.target.value)}
        value={value}
        placeholder={placeholder}
      />

      <ErrorWrapper>
        {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorWrapper>
    </MainWrapper>
  );
};
