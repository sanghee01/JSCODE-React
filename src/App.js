import styled from "styled-components";
import InputGroup from "./InputGroup";
import GlobalStyle from "./GlobalStyles";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  margin: 10px auto;
`;

const Button = styled.button`
  margin-top: 40px;
  padding: 14px;
  border-radius: 30px;
  border: none;
  background-color: #1889e6;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Form action="#">
        <Header>회원가입</Header>
        <InputGroup
          name="이메일"
          type="email"
          text="이메일을 입력하세요"
          label="email"
          isRequired="true"
        />
        <InputGroup
          name="비밀번호"
          type="password"
          text="비밀번호을 입력하세요"
          label="password"
          isRequired="true"
        />
        <InputGroup
          name="비밀번호 재확인"
          type="password"
          text="비밀번호을 입력하세요"
          label="re-password"
          isRequired="true"
        />
        <InputGroup
          name="이름"
          type="text"
          text="이름을 입력하세요"
          label="name"
          isRequired="true"
        />
        <InputGroup
          name="나이"
          type="number"
          text="나이를 입력하세요"
          label="age"
          isRequired={null}
        />
        <Button>가입하기</Button>
      </Form>
    </>
  );
};

export default App;
