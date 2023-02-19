import * as style from "../styles/InputGroupStyle";

const InputGroup = ({
  title,
  name,
  type,
  placeholder,
  isRequired,
  onChange,
  message,
}) => {
  return (
    <>
      <style.Title>
        <label htmlFor={name}>{title}</label>
        <style.Essential>
          {isRequired && (
            <sup>
              필수 <style.Aster>*</style.Aster>
            </sup>
          )}
        </style.Essential>
      </style.Title>
      <style.Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
      />
      {message && (
        <style.PasswordNotMatchMsg>{message}</style.PasswordNotMatchMsg>
      )}
    </>
  );
};
export default InputGroup;
