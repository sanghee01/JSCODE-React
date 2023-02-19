import { useState, useEffect } from "react";
import InputGroup from "../components/InputGroup";
import * as style from "../styles/SignFormStyle";

const SignForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    repassword: "",
    username: "",
    age: "",
  });
  const [isPasswordMatch, setIsPasswordMatch] = useState("");
  const [isNotCorrect, setIsNotCorrect] = useState(true);

  useEffect(() => {
    if (input.repassword && input.password !== input.repassword) {
      setIsPasswordMatch("비밀번호가 일치하지 않습니다");
    } else {
      setIsPasswordMatch("");
    }
  }, [input.password, input.repassword]);

  useEffect(() => {
    if (
      !isPasswordMatch &&
      input.email &&
      input.password &&
      input.repassword &&
      input.username
    ) {
      setIsNotCorrect(false);
    } else {
      setIsNotCorrect(true);
    }
  }, [
    isPasswordMatch,
    input.email,
    input.password,
    input.repassword,
    input.username,
  ]);

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      `이메일: ${input.email}, 비밀번호: ${input.password}, 비밀번호 재입력: ${input.repassword}, 이름: ${input.username}, 나이: ${input.age}`
    );
    alert(`${input.username}님 환영합니다!`);
  };

  const onClickResetButton = (e) => {
    setInput({
      email: "",
      password: "",
      repassword: "",
      username: "",
      age: "",
    });
  };

  return (
    <>
      <style.Form onSubmit={onSubmit}>
        <style.Header>회원가입</style.Header>
        <InputGroup
          title="이메일"
          type="email"
          placeholder="이메일을 입력하세요"
          name="email"
          isRequired
          onChange={onChangeInput}
        />
        <InputGroup
          title="비밀번호"
          type="password"
          placeholder="비밀번호을 입력하세요"
          name="password"
          isRequired
          onChange={onChangeInput}
        />
        <InputGroup
          title="비밀번호 재확인"
          type="password"
          placeholder="비밀번호을 입력하세요"
          name="repassword"
          isRequired
          onChange={onChangeInput}
          message={isPasswordMatch}
        />
        <InputGroup
          title="이름"
          type="text"
          placeholder="이름을 입력하세요"
          name="username"
          isRequired
          onChange={onChangeInput}
        />
        <InputGroup
          title="나이"
          type="number"
          placeholder="나이를 입력하세요"
          name="age"
          onChange={onChangeInput}
        />
        <style.SubmitButton disabled={isNotCorrect}>
          가입하기
        </style.SubmitButton>
        <style.ResetButton type="reset" onClick={onClickResetButton}>
          초기화
        </style.ResetButton>
      </style.Form>
    </>
  );
};

export default SignForm;
