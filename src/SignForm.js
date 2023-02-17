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
  margin-top: 10px;
`;

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState("");
  const [isAllCorrect, setIsAllCorrect] = useState(false);

  useEffect(() => {
    if (repassword && password !== repassword) {
      setIsPasswordMatch("비밀번호가 일치하지 않습니다");
    } else {
      setIsPasswordMatch("");
    }
  }, [password, repassword]);

  useEffect(() => {
    if (isPasswordMatch || !email || !password || !repassword || !username) {
      setIsAllCorrect(false);
    } else {
      setIsAllCorrect(true);
    }
  }, [isPasswordMatch, email, password, repassword, username]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeRepassword = (e) => {
    setRepassword(e.target.value);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      `이메일: ${email}, 비밀번호: ${password}, 비밀번호 재입력: ${repassword}, 이름: ${username}, 나이: ${age}`
    );
    alert(`${username}님 환영합니다!`);
  };

  const onClickResetButton = (e) => {
    setEmail("");
    setPassword("");
    setRepassword("");
    setUsername("");
    setAge("");
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Header>회원가입</Header>
        <InputGroup
          title="이메일"
          type="email"
          placeholder="이메일을 입력하세요"
          label="email"
          isRequired
          onChange={onChangeEmail}
        />
        <InputGroup
          title="비밀번호"
          type="password"
          placeholder="비밀번호을 입력하세요"
          label="password"
          isRequired
          onChange={onChangePassword}
        />
        <InputGroup
          title="비밀번호 재확인"
          type="password"
          placeholder="비밀번호을 입력하세요"
          label="repassword"
          isRequired
          onChange={onChangeRepassword}
          message={isPasswordMatch}
        />
        <InputGroup
          title="이름"
          type="text"
          placeholder="이름을 입력하세요"
          label="username"
          isRequired
          onChange={onChangeUsername}
        />
        <InputGroup
          title="나이"
          type="number"
          placeholder="나이를 입력하세요"
          label="age"
          onChange={onChangeAge}
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
