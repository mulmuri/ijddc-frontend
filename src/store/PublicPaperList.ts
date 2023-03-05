import { atom, selector } from "recoil";
import { ArticleSummaryBoxProps } from "../component/ArticleSummaryBox";
import { PaperList } from "../dummyData/PaperList";



export const publicPaperListLoadState = atom<boolean>({
  key: 'paperListLoadState',
  default: false
})

export const publicPaperListState = atom<ArticleSummaryBoxProps[]>({
  key: 'paperlistState',
  default: PaperList
})

export const publicPaperListNoState = atom<number>({
  key: 'publicPaperListNoState',
  default: 0
})

export const publicPaperListArrangedState = selector<ArticleSummaryBoxProps[][]>({
  key: 'publicPaperListArrangedState',
  get: ({get}) => {
    const publicPaperList = get(publicPaperListState);
    const publicPaperListArranged: ArticleSummaryBoxProps[][] = []

    return publicPaperListArranged;
  }
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

