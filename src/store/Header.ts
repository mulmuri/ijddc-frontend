import { atom } from "recoil";



interface headerValueStateProps {
  onHover: boolean;
  itemList: {
    text: string;
    link: string;
  }[];
}


export const headerValueState = atom<headerValueStateProps>({
  key: 'headerValueState',
  default: {
    onHover: false,
    itemList: []
  }
})