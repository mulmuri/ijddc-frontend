import { useRecoilState, useSetRecoilState } from "recoil"
import { headerValueState } from "../store/Header"
import { LinkProps } from "../type/header"



const useHeaderHook = () => {
  const [headerValue, headerValueSetter] = useRecoilState(headerValueState)

  const openHeaderBottom = (index?: LinkProps[]) => {

    (!!index) ?
    headerValueSetter({
      onHover: true,
      itemList: index
    })
    :
    headerValueSetter({
      ...headerValue,
      onHover: true
    })
  };

  const closeHeaderBottom = () => {
    headerValueSetter({
      ...headerValue,
      onHover: false,
    })
  }

  return {
    openHeaderBottom,
    closeHeaderBottom
  }
}

export default useHeaderHook;