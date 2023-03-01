import { PaperSearchValue } from "../page/paper/PaperSearchPage"
import restapi from "./restapi"



export const fetchPaperSearch = () : Promise<PaperSearchValue[]>  => {
  return restapi.get("/asdf");
}