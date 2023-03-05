import styled from "styled-components";
import { navInfoList } from "../../page/layout/MainHeader/info";
import { HeaderHeight } from "../../page/layout/MainHeader/style";
import LogoSection from "./LogoSection";
import TabItem from "./TabItem";



const HeaderTopStyle = styled.header`
  position: fixed;
  background-color: white;
  height: ${String(HeaderHeight)}px;
  width: 100%;
  z-index: 5;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #DADADA;
`


const HeaderTop = () => {

  return (
    <HeaderTopStyle>
      <LogoSection/>
      {navInfoList.map(navInfo => (<TabItem {...navInfo}/> ))}
    </HeaderTopStyle>
  )
}

export default HeaderTop;