import styled from "styled-components";

export const Title = styled.div`
  margin-top: 15px;
`;

export const Essential = styled.span`
  margin-left: 5px;
  font-size: 13px;
`;

export const Aster = styled.span`
  color: red;
`;

export const Input = styled.input`
  padding: 14px 25px;
  border-radius: 5px;
  border: 1px solid lightgray;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PasswordNotMatchMsg = styled.p`
  font-size: 10px;
  color: red;
`;
