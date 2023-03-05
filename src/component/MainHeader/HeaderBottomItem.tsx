import { useNavigate } from "react-router-dom";
import styled from "styled-components";




const HeaderBottomItemStyle = styled.div`
  color: black;
  width: fit-content;
  transition: color 0.3s ease;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;

  &:hover {
    color: #004DB3;
  }
`;



interface HeaderBottomItemProps {
  text: string;
  link: string;
}



const HeaderBottomItem = ({text, link}: HeaderBottomItemProps ) => {
  const navigate = useNavigate();

  return (
    <HeaderBottomItemStyle
      onClick={() => navigate(text)}
    >
      {link}
    </HeaderBottomItemStyle>
  )
}

export default HeaderBottomItem;