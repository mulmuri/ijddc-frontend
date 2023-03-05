import { BrowserRouter } from 'react-router-dom'

import MainFooter from "./page/layout/MainFooter"
import MainHeader from "./page/layout/MainHeader"
import { ThemeProvider } from '@mui/material'
import { mainTheme } from './style/theme/mainTheme'
import MainRouter from './page/Router'
import MainContent from './page/layout/MainContent/MainContent'

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();


function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <MainHeader/>
            <MainContent>
              <MainRouter/>
            </MainContent>
            <MainFooter/>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
