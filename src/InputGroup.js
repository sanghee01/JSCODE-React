import "./Style.css";
const InputGroup = (props) => {
  const { label, name, type, text, isRequired } = props;
  return (
    <>
      <div className="title">
        <label for={label}>{name}</label>
        <span className="essential">
          {isRequired ? (
            <sup>
              필수 <span className="aster">*</span>
            </sup>
          ) : null}
        </span>
      </div>
      <input
        type={type}
        id={label}
        placeholder={text}
        required={isRequired ? "required" : null}
      />
    </>
  );
};

export default InputGroup;
