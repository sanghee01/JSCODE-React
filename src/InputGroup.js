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

const InputGroup = (props) => {
  const { label, name, type, text, isRequired } = props;
  return (
    <>
      <Title>
        <label for={label}>{name}</label>
        <Essential>
          {isRequired && (
            <sup>
              필수 <Aster>*</Aster>
            </sup>
          )}
        </Essential>
      </Title>
      <Input type={type} id={label} placeholder={text} required={isRequired} />
    </>
  );
};

export default InputGroup;
