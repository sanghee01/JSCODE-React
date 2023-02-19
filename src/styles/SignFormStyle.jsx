import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  margin: 10px auto;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  margin-top: 40px;
  padding: 14px;
  border-radius: 30px;
  border: none;
  background-color: #1889e6;
  color: white;
  font-size: 15px;
  font-weight: bold;
  :disabled {
    background-color: lightgray;
  }
`;

export const ResetButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  padding: 14px;
  border-radius: 30px;
  border: none;
  background-color: gray;
  font-size: 15px;
  font-weight: bold;
  color: white;
`;
