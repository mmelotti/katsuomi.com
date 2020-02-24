/**
 *
 * Input
 *
 */

import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

//import utils
import * as colors from "utils/color";
import * as fontSize from "utils/fontSize";

// import css
import "react-datepicker/dist/react-datepicker.css";

interface DefaultProps {
  placeholder?: string;
  type?: string;
  isRequired?: boolean;
  value?: string;
  date?: Date;
  width?: string;
  borderColor?: string;
  backgroundColor?: string;
  margin?: string[];
  padding?: string[];
  onChange: (value: any) => void;
  children?: string | ReactElement<any>;
}

interface InputStyleProps {
  width?: string;
  borderColor?: string;
  backgroundColor?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

const InputWrapper = styled.input<InputStyleProps>`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.WHITE};
  border: 2px
    ${props => (props.borderColor ? props.borderColor : colors.BORDER_GRAY)}
    solid;
  outline: none;
  font-size: ${fontSize.MINI};
  transition: all 0.2s;
  color: ${colors.BLACK};
  margin-top: ${props => props.marginTop && props.marginTop};
  margin-bottom: ${props => props.marginBottom && props.marginBottom};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  margin-right: ${props => props.marginRight && props.marginRight};
  padding-top: ${props => props.paddingTop && props.paddingTop};
  padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
  padding-left: ${props => props.paddingLeft && props.paddingLeft};
  padding-right: ${props => props.paddingRight && props.paddingRight};
  &:focus {
    border-color: ${colors.LIGHTER_BLUE};
  }
  width: ${props => (props.width ? props.width : "inherit")};
`;

const DateWrapper = styled.div<InputStyleProps>`
  > div > div > input {
    background-color: ${props =>
      props.backgroundColor ? props.backgroundColor : colors.WHITE};
    border: 2px
      ${props => (props.borderColor ? props.borderColor : colors.BORDER_GRAY)}
      solid;
    outline: none;
    font-size: ${fontSize.MINI};
    transition: all 0.2s;
    color: ${colors.BLACK};
    margin-top: ${props => props.marginTop && props.marginTop};
    margin-bottom: ${props => props.marginBottom && props.marginBottom};
    margin-left: ${props => props.marginLeft && props.marginLeft};
    margin-right: ${props => props.marginRight && props.marginRight};
    padding-top: ${props => props.paddingTop && props.paddingTop};
    padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
    padding-left: ${props => props.paddingLeft && props.paddingLeft};
    padding-right: ${props => props.paddingRight && props.paddingRight};
    &:focus {
      border-color: ${colors.LIGHTER_BLUE};
    }
    width: ${props => (props.width ? props.width : "inherit")};
  }
`;

const Input: FC<DefaultProps> = ({
  placeholder,
  value,
  date,
  width,
  onChange,
  type,
  isRequired,
  borderColor,
  backgroundColor,
  margin,
  padding
}) => {
  return type === "date" ? (
    <DateWrapper
      placeholder={placeholder}
      width={width}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      marginTop={margin && margin[0]}
      marginBottom={margin && margin[1]}
      marginLeft={margin && margin[2]}
      marginRight={margin && margin[3]}
      paddingTop={padding && padding[0]}
      paddingBottom={padding && padding[1]}
      paddingLeft={padding && padding[2]}
      paddingRight={padding && padding[3]}
    >
      <DatePicker selected={date} onChange={date => date && onChange(date)} />
    </DateWrapper>
  ) : (
    <InputWrapper
      type={type ? type : undefined}
      placeholder={placeholder}
      value={value}
      width={width}
      required={isRequired}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      marginTop={margin && margin[0]}
      marginBottom={margin && margin[1]}
      marginLeft={margin && margin[2]}
      marginRight={margin && margin[3]}
      paddingTop={padding && padding[0]}
      paddingBottom={padding && padding[1]}
      paddingLeft={padding && padding[2]}
      paddingRight={padding && padding[3]}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default Input;

// background-color: #fafafa;
// border: 2px #ccc solid;
// outline: none;
// font-size: 1.2rem;
// -webkit-transition: all 0.2s;
// transition: all 0.2s;
// color: #2D323C;
// margin-top: 10px;
// margin-bottom: 10px;
// margin-left: 0px;
// margin-right: 0px;
// padding-top: 10px;
// padding-bottom: 10px;
// padding-left: 10px;
// padding-right: 10px;
// width: 70vw;
