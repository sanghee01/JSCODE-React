import styled from "styled-components";

const Title = styled.div`
  margin-top: 15px;
`;

const Essential = styled.span`
  margin-left: 5px;
  font-size: 13px;
`;

const Aster = styled.span`
  color: red;
`;

const Input = styled.input`
  padding: 14px 25px;
  border-radius: 5px;
  border: 1px solid lightgray;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const PasswordNotMatchMsg = styled.p`
  font-size: 10px;
  color: red;
`;

const InputGroup = ({
  title,
  label,
  type,
  placeholder,
  isRequired,
  onChange,
  message,
}) => {
  return (
    <>
      <Title>
        <label htmlFor={label}>{title}</label>
        <Essential>
          {isRequired && (
            <sup>
              필수 <Aster>*</Aster>
            </sup>
          )}
        </Essential>
      </Title>
      <Input
        type={type}
        id={label}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
      />
      {message && <PasswordNotMatchMsg>{message}</PasswordNotMatchMsg>}
    </>
  );
};
export default InputGroup;
