import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components"
import useHeaderHook from "../../contexts/useHeader";
import { headerValueState } from "../../store/Header";
import "../../style/font.css"
import { TabProps } from "../../type/header";



const TabItenStyle = styled.div`
  font-size: 25px;
  color: black;
  width: fit-content;
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
  font-family: OpenSans;

  display: flex;
  align-items: center;

  &:hover {
    color: #004DB3;
  }
`






const TabItem = ({text, link, index}: TabProps) => {
  const navigate = useNavigate()

  const {openHeaderBottom, closeHeaderBottom} = useHeaderHook();



  return (
    <TabItenStyle
      onClick={() => navigate(link)}
      onMouseEnter={() => openHeaderBottom(index)}
      onMouseLeave={() => closeHeaderBottom()}
    >
      {text}
    </TabItenStyle>
  )
}

export default TabItem;