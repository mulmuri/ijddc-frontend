import GoogleButton from "../../../component/GoogleButton";
import Logo from "../../../component/Logo";
import MainBox from "../../../component/MainBox";
import PageHeader from "../../../component/PageHeader";
import InputForm from "../../../component/TextField";
import { Frame, InputSection, LogoSection, TitleSection } from "./style";




const SigninPage = () => {
  return (
    <Frame>
      <PageHeader title="로그인"/>
      <MainBox>
        <LogoSection>
          <Logo/>
        </LogoSection>
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