import { atom } from "recoil";
import { PaperList } from "../dummyData/PaperList";



export const publicPaperListLoadState = atom({
  key: 'paperListLoadState',
  default: ''
})

const publicPaperListState = atom({
  key: 'paperlistState',
  default: PaperList
})

/*
export const paperListState = selector({
  key: 'paperListState',
  get: async ({get}) : Promise<PaperSearchValue[]> => {
    const { data } = useQuery('paperListState', fetchPaperSearch)
    if (typeof data === 'undefined') throw Error()
    return data;
  }
})
*/

export default publicPaperListState;