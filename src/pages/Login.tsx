import styled, { useTheme } from "styled-components";
import { submitLogin } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token: any = await submitLogin({ id, pw });
    if (token.data) {
      localStorage.setItem("jwt", token.data);
      alert("관리자로 로그인함");
      navigate("/");
    }
  };

  return (
    <Container>
      <LoginBox>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: "100%", display: "inline-flex" }}>
            <SignIn>로그인</SignIn>
          </div>
          <LoginForm id="loginForm" onSubmit={submit}>
            <Label>아이디</Label>
            <InputBox
              name="id"
              placeholder="ID를 입력하세요"
              value={id}
              onChange={onChangeId}
            ></InputBox>
            <Label>비밀번호</Label>
            <InputBox
              name="pw"
              type="password"
              placeholder="PASSWORD를 입력하세요"
              value={pw}
              onChange={onChangePw}
            ></InputBox>
            <SubmitButton type="submit">로그인</SubmitButton>
          </LoginForm>
        </div>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 450px;
  border-radius: 15px;
`;

const SignIn = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 15px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
`;

const Label = styled.div`
  width: 80%;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: small;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const InputBox = styled.input`
  width: 80%;
  height: 30px;
  outline: none;
  border: 2px lightGray solid;
  border-radius: 5px;

  :focus {
    border-color: #b6ade6;
  }
`;

const SubmitButton = styled.button`
  margin-top: 50px;
  width: 82%;
  outline: none;
  height: 35px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.bg100};
  border: none;
  border-radius: 10px;
  font-size: medium;
  font-weight: 700;

  :hover {
    transition-duration: 0.1s;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.white};
  }
`;

export default Login;
