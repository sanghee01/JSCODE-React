import { useState, useEffect } from "react";
import InputGroup from "./InputGroup";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  margin: 10px auto;
`;

const SubmitButton = styled.button`
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
const ResetButton = styled.button`
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

const SignForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    repassword: "",
    username: "",
    age: "",
  });
  const [isPasswordMatch, setIsPasswordMatch] = useState("");
  const [isAllCorrect, setIsAllCorrect] = useState(false);

  useEffect(() => {
    if (input.repassword && input.password !== input.repassword) {
      setIsPasswordMatch("비밀번호가 일치하지 않습니다");
    } else {
      setIsPasswordMatch("");
    }
  }, [input.password, input.repassword]);

  useEffect(() => {
    if (
      isPasswordMatch ||
      !input.email ||
      !input.password ||
      !input.repassword ||
      !input.username
    ) {
      setIsAllCorrect(false);
    } else {
      setIsAllCorrect(true);
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
      <Form onSubmit={onSubmit}>
        <Header>회원가입</Header>
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
        <SubmitButton isActive={isAllCorrect}>가입하기</SubmitButton>
        <ResetButton type="reset" onClick={onClickResetButton}>
          초기화
        </ResetButton>
      </Form>
    </>
  );
};

export default SignForm;
