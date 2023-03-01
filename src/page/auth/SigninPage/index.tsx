import GoogleButton from "../../../component/GoogleButton";
import Logo from "../../../component/Logo";
import MainBox from "../../../component/MainBox";
import InputForm from "../../../component/TextField";
import { Frame, InputSection, LogoSection, TitleSection } from "./style";




const SigninPage = () => {
  return (
    <Frame>
      <MainBox>
        <LogoSection>
          <Logo/>
        </LogoSection>
        <TitleSection>로그인</TitleSection>
        <InputSection>
          <InputForm isError={false}/>
        </InputSection>
        <InputSection>
          <InputForm isError={false}/>
        </InputSection>
        <InputSection>
          <GoogleButton/>
        </InputSection>
      </MainBox>
    </Frame>
  )
}

export default SigninPage;