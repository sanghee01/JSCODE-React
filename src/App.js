import "./Style.css";
import InputGroup from "./InputGroup";

const App = () => {
  return (
    <form action="#">
      <h1>회원가입</h1>
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
      <button>가입하기</button>
    </form>
  );
};

export default App;
