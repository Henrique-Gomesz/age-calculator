import { useState } from "react";
import { Input } from "../input/input";
import {
  MainWrapper,
  ButtonWrapper,
  Divider,
  DividerWrapper,
  InputsWrapper,
  IndividualInputWrapper,
  ButtonBackground,
  DateWrapper,
  SingleDateWrapper,
  DateNumber,
  Date as BaseDate,
  ImageComponent,
} from "./desktop.styles";
import {
  differenceInDays,
  differenceInYears,
  differenceInMonths,
} from "date-fns";
import logo from "../../assets/icon-arrow.svg";

export const DesktopComponent = () => {
  const [result, setResult] = useState({
    years: "--",
    months: "--",
    days: "--",
  });
  const [hasError, setHasError] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const isNumber = (text: string) => {
    const regex = /^[0-9\b]+$/;
    return regex.test(text);
  };

  const handleDay = (text: string) => {
    setHasError(false);
    if (isNumber(text) || text == "") setDay(text);
  };

  const handleMonth = (text: string) => {
    setHasError(false);
    if (isNumber(text) || text == "") setMonth(text);
  };

  const handleYear = (text: string) => {
    setHasError(false);
    if (isNumber(text) || text == "") setYear(text);
  };

  const calculateDate = () => {
    const actualDate = new Date();

    if (!(Number(day) > 0 && Number(day) <= 31)) return setHasError(true);
    if (!(Number(month) > 0 && Number(month) <= 12)) return setHasError(true);
    if (
      !(Number(year) > 0 && Number(year) <= actualDate.getFullYear()) &&
      year.length < 3
    )
      return setHasError(true);
    console.log(
      Number(day) > actualDate.getDate() ||
        Number(month) > actualDate.getMonth() + 1
    );

    if (
      Number(year) === actualDate.getFullYear() &&
      (Number(day) > actualDate.getDate() ||
        Number(month) > actualDate.getMonth() + 1)
    )
      return setHasError(true);
    const dateIn = new Date(Number(year), Number(month) - 1, Number(day));
    setResult({
      days: differenceInDays(actualDate, dateIn).toString(),
      months: differenceInMonths(actualDate, dateIn).toString(),
      years: differenceInYears(actualDate, dateIn).toString(),
    });
  };

  return (
    <MainWrapper>
      <InputsWrapper>
        <IndividualInputWrapper>
          <Input
            maxLength={2}
            value={day}
            placeholder="DD"
            onChange={handleDay}
            inputLabel="DAY"
            hasError={hasError}
            errorMessage="Must be a valid date"
          />
        </IndividualInputWrapper>
        <IndividualInputWrapper>
          <Input
            maxLength={2}
            value={month}
            placeholder="MM"
            onChange={handleMonth}
            inputLabel="MONTH"
            hasError={hasError}
            errorMessage=""
          />
        </IndividualInputWrapper>
        <IndividualInputWrapper
          style={{
            marginRight: 0,
          }}
        >
          <Input
            maxLength={4}
            value={year}
            placeholder="YYYY"
            onChange={handleYear}
            inputLabel="YEAR"
            hasError={hasError}
            errorMessage=""
          />
        </IndividualInputWrapper>
      </InputsWrapper>
      <DividerWrapper>
        <ButtonWrapper>
          <Divider />
          <ButtonBackground onClick={calculateDate}>
            <ImageComponent src={logo}></ImageComponent>
          </ButtonBackground>
        </ButtonWrapper>
      </DividerWrapper>
      <DateWrapper>
        <SingleDateWrapper>
          <DateNumber>{result.years}</DateNumber>
          <BaseDate>{"years"}</BaseDate>
        </SingleDateWrapper>
        <SingleDateWrapper>
          <DateNumber>{result.months}</DateNumber>
          <BaseDate>{"months"}</BaseDate>
        </SingleDateWrapper>
        <SingleDateWrapper>
          <DateNumber>{result.days}</DateNumber>
          <BaseDate>{"days"}</BaseDate>
        </SingleDateWrapper>
      </DateWrapper>
    </MainWrapper>
  );
};
