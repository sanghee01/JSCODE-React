import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  margin: 10px auto;
`;

export const SubmitButton = styled.button`
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
  margin-top: 40px;
  padding: 14px;
  border-radius: 30px;
  border: none;
  background-color: ${({ isActive }) => (isActive ? "#1889e6" : "lightgray")};
  color: white;
  font-size: 15px;
  font-weight: bold;
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
