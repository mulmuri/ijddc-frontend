import { useState } from "react";
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import styled from "styled-components";
import HeaderBottomItem from "./HeaderBottomItem";
import { HeaderBottomHeight, HeaderHeight } from "../../page/layout/MainHeader/style";
import { headerValueState } from "../../store/Header";
import { useRecoilValue } from "recoil";
import useHeaderHook from "../../contexts/useHeader";




interface HeaderBottomStyleProps {
  top?: number;
}

const HeaderBottomStyle = styled(motion.header)<HeaderBottomStyleProps>`

  position: relative;  z-index: 3;

  height: ${String(HeaderBottomHeight)}px;
  width: 100%;
  background-color: #F0F0F0;


  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);

  

`;



const HeaderBottom = () => {

  const {openHeaderBottom, closeHeaderBottom} = useHeaderHook()

  const headerValue = useRecoilValue(headerValueState);
  const state = headerValue.onHover;

  const initialValue = HeaderHeight - HeaderBottomHeight;
  const animateValue = HeaderHeight;

  return (
    <HeaderBottomStyle
      initial={{ top: initialValue}}
      animate={{ top: (state === true ? animateValue : initialValue) }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      onMouseEnter={() => openHeaderBottom()}
      onMouseLeave={() => closeHeaderBottom()}
    >
      {headerValue.itemList.map(item => (<HeaderBottomItem {...item} key={item.text}/> ))}

    </HeaderBottomStyle>

  );
}

export default HeaderBottom;