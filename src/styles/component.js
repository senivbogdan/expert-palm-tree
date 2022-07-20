import styled from "styled-components";

export const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 45%;
  background: grey;
  border-radius: 15px;
`

export const Div = styled.div`
  display: flex;

`

export const FildsDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.h1`
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const FieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: white;
  margin: 30px;
`

export const Input = styled.input`
  font-size: 14px;
  outline: none;
  border: ${props => props.message ? "solid 1px red" : "solid 1px #465656"};
  cursor: pointer;

  :focus {
    outline: none;
    font-size: 14px;
    border: ${props => props.message ? "solid 1px red" : "solid 1px #465656"};
  }
`

export const CheckBox = styled.input`

`

export const ErrorDiv = styled.div`
  color: #ff0000;
  font-size: 14px;
`

export const ButtonSubmit = styled.button`
  background: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  padding: 20px;
  font-size: 16px;
  font-weight: 150;
  letter-spacing: 10px;
  text-align: center;
  cursor: pointer;
  margin: 40px 0;
  padding: 20px;
  width: 50%;

  :hover {
    background: #bf1650;
  }

  :active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`

export const Select = styled.select`

`

export const Option = styled.option`

`

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ConfirmDataUsageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Table = styled.table`
  width: 45%;
  color: white;
  margin: 20px 0 0 0;
`

export const Tbody = styled.tbody`

`

export const Caption = styled.caption`
  font-size: 25px;
`

export const Tr = styled.tr`
`

export const Th = styled.th`
  border: 1px solid red;
`
